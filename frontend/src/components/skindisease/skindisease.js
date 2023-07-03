import Cookies from "universal-cookie";
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { jsPDF } from "jspdf";
// import Prompt from './Prompt';
import "./../MVPComponent/mvp.css";
// import Cookies from 'universal-cookie';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./../MVPComponent/firebase";
import { v4 } from "uuid";
import Assesment from "./../MVPComponent/Assesment";
import MealPlanner from "./../MVPComponent/MealPlanner";
import { Assessment } from "@mui/icons-material";
import Loader from "../layout/Loader/loader";
import { Divider } from "@mui/material";
const Mvp = () => {
  const cookies = new Cookies();
  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: "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",
    })
  );
  const doc = new jsPDF();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [act, setAct] = useState();
  const [cal, setCal] = useState();
  const [amttoloose, setamttolosoe] = useState();
  const [time, settime] = useState();

  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState("");
  const [quantity, setQuantitiy] = useState();
  const [avatarPreview, setAvatarPreview] = useState("");
  const [loader, setLoader] = useState(true);

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [flag, setflag] = useState(false);
  const [name, setname] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [Alternate, setAlternate] = useState();

  const [imageUrls, setImageUrls] = useState([]);
  const [localurl, setlocalurl] = useState("");
  const imagesListRef = ref(storage, "images/");

  const changeHandler = (event) => {
    setImageUpload(event.target.files[0]);

    var image = document.getElementById("outputimageupload");
    image.src = URL.createObjectURL(event.target.files[0]);

    setIsSelected(true);
  };
  const uploadFile = () => {
    console.log(imageUpload);

    if (imageUpload == null) {
      setflag(false);
      return;
    }
    let fileuuidname = `${imageUpload.name + v4()}`;
    setname(fileuuidname);
    const imageRef = ref(storage, `images/${fileuuidname}`);
    console.log(imageRef);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    setflag(true);
  };
  const calorcal = (e) => {
    e.preventDefault();
    let RMR = weight * 13.75 + height * 5 - age * 6.76 + 655.1;
    let totalcal, time;

    if (act == "low") {
      totalcal = 0.2 * RMR + RMR;
      time = 60;
    } else if (act == "mid") {
      totalcal = 0.5 * RMR + RMR;
      time = 80;
    } else {
      totalcal = 0.8 * RMR + RMR;
      time = 120;
    }

    totalcal = time * 10 + totalcal;
    totalcal = totalcal - 0.2 * totalcal;

    setCal(totalcal);
  };
  const [llo, setllo] = useState(false);
  const getAlternative = async () => {
    let prompt = `you suggested ${Alternate} for weight loss, I am not able to find it or make it, please suggest some viable alternative for indian market`
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    var data = response.data.choices[0].message.content;
    setAlternate(data)
  }
  const gettheprompt = async () => {
    setllo(true);
    let prompt = `I am ${age} years old, my weight is ${weight}kg and height is ${height}cm, I want to lose ${amttoloose} kg weigth in ${time} week of time.Please suggest separate diet plan for both veg and a non veg for a week to achieve this goal, please ensure you give proper result having diet plan for all 7 days, previously you only gave for 5 days and generate only 1 response not multiple`;
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    var data = response.data.choices[0].message.content;
    var margin = 6;
    var lineHeight = 12;
    var pageHeight = doc.internal.pageSize.height;
    var pageWidth = doc.internal.pageSize.width;
    console.log(data)
    // Split the data into an array of lines
    var lines = doc.splitTextToSize(data, pageWidth - margin * 2);

    // Calculate the number of pages needed to display the data
    var totalPages = Math.ceil(lines.length / (pageHeight / lineHeight));

    // Loop through each page and add the data
    for (var i = 0; i < totalPages; i++) {
      doc.setFontSize(12);
      var y = i === 0 ? margin + 10 : margin;

      // Loop through each line and add it to the page
      for (var j = 0; j < lines.length; j++) {
        if (y + lineHeight > pageHeight - margin) {
          // If the line would exceed the page height, start a new page
          doc.addPage();
          y = margin;
        }
        // Add the line to the page
        doc.text(margin, y, lines[j]);
        y += lineHeight;
      }
    }

    // Save the PDF document
    // doc.save("filename.pdf");

    // console.log("sucessfully");
    // console.log(response.data.choices[0].message.content);
    setllo(false);
    // doc.text(response.data.choices[0].message.content, 10, 10);
    doc.save("a4.pdf");
  };

  const getdiag = () => {
    console.log(cookies.get("Protein"));
    console.log(cookies.get("Calories"));
    console.log(cookies.get("Fat"));
  };

  const predictsabgi = async () => {
    setLoader(false);
    let data = {
      name,
    };
    // const blog = { title, body, author };
    await fetch("http://localhost:3003/skindisease", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(name),
    })
      .then((response) => response.json())
      .then((data) => setResult(data.category));
  };

  const predict = () => {
    setLoader(false);

    let data = {
      name,
    };
    // const blog = { title, body, author };
    fetch("http://localhost:3003/skindisease", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(name),
    })
      .then((response) => response.json())
      .then((data) => setResult(data));
  };

  return (
    <div>
      <div className="parent3 ">
        <section className="left3 border-2">
          <p></p>
          <i class="fa-solid fa-arrow-down"></i>
          <input type="file" onChange={changeHandler} accept="image/"></input>


          <button style={{"backgroundColor":"green"}} onClick={uploadFile}>U P L O A D</button>

          <button style={{"backgroundColor":"green"}} onClick={predictsabgi}>Predict </button>
 

          {/* <button onClick={predict}>predict dish </button > */}

          {result || loader ? (
            <>
              <div className="">
                <p>
                  Result : <span className="text-orange-500"> {result}</span>
                </p>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </section>

        <section className="middle3 card card-5">
          <h1>Selected Image</h1>
          {avatarPreview === "" && (
            <>
              <img id="outputimageupload" alt="Avatar Preview" />
            </>
          )}
        </section>
      </div>

    </div>      
  );
};

export default Mvp;
