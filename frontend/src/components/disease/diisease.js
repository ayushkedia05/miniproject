import './App.css';
import React from 'react'
import TreatmentForm from '../../yash/TreatmentForm'
import { BsFillChatFill } from 'react-icons/bs'
import { useState } from 'react';
import MedicineCalculator from  './../../yash/MedicineCalculator'
import axios from 'axios';
function Disease() {
  const [mydata, setMydata] = useState("SelectSymtom");
  const [di,setdi]=useState('');
  const [hospital,sethos]=useState(false);

  const handledisease=(event)=>{
    let data={
      "1":{mydata},
      "2":{mydata2},
      "3":{mydata3},
      "4":{mydata4},
      "5":{mydata5},

    }



    const getdata=axios.post('http://localhost:3003/disease',data);

    getdata.then((res)=> res).then((dat)=>setdi(dat) 
    
    ).then((res)=>sethos(true));


  }

  const handleChange = (event) => {
    setMydata(event.target.value)
  }

  const [mydata2, setMydata2] = useState("SelectSymtom");

  const handleChange2 = (event) => {
    setMydata2(event.target.value)
  }

  const [mydata3, setMydata3] = useState("SelectSymtom");

  const handleChange3 = (event) => {
    setMydata3(event.target.value)
  }


  const [mydata4, setMydata4] = useState("SelectSymtom");

  const handleChange4 = (event) => {
    setMydata4(event.target.value)
  }


  const [mydata5, setMydata5] = useState("SelectSymtom");

  const handleChange5 = (event) => {
    setMydata5(event.target.value)
  }

  
  const [fetch, setFetch] = useState("SelectSymtom");

  const handleChange6 = (event) => {
    setFetch(event.target.value)
  }




  return (
    <div>
      
      <div className='head' >
      <h2>Disease Prediction is based on symptoms</h2>
      </div>

      <div className='head2' >
      <h2>Select the symptoms</h2>
      </div>
       
     <div className='left'>
      <div className='opt'>
      <select  onChange={(e)=>setMydata(e.target.value)} placeholder='Select Symtom'>
      <option value="" >  Choose      </option>
        <option value="back_pain" >  back_pain        </option>
        <option value="constipation" >  constipation       </option>
        <option value="abdominal_pain" >  abdominal_pain         </option>
        <option value="diarrhoea" >   diarrhoea        </option>
        <option value="mild_fever" >  mild_fever        </option>
        <option value="yellow_urine" >       yellow_urine </option>
        <option value="yellowing_of_eyes" >     yellowing_of_eyes   </option>
        <option value="acute_liver_failure" >    acute_liver_failure    </option>

           <option value="fluid_overload" >    fluid_overload    </option>
              <option value="swelling_of_stomach" >     swelling_of_stomach   </option>   
              <option value="swelled_lymph_nodes" >   swelled_lymph_nodes     </option>
              <option value="malaise" >   malaise     </option>
              <option value="blurred_and_distorted_vision" >  blurred_and_distorted_vision      </option>
              <option value="phlegm" >    phlegm    </option>
              <option value="throat_irritation" >  throat_irritation      </option>
              <option value="redness_of_eyes" >  redness_of_eyes      </option>
              <option value="sinus_pressure" >  sinus_pressure      </option>
              <option value="runny_nose" > runny_nose       </option>
              <option value="congestion" >   congestion     </option>
              <option value="chest_pain" >   chest_pain     </option>
              <option value="weakness_in_limbs" >   weakness_in_limbs     </option>
              <option value="fast_heart_rate" >   fast_heart_rate     </option>
              <option value="pain_during_bowel_movements" >  pain_during_bowel_movements      </option>
              <option value="pain_in_anal_region" >   pain_in_anal_region     </option>
              <option value="bloody_stool" >     bloody_stool   </option>
              <option value="irritation_in_anus" >  irritation_in_anus      </option>
              <option value="neck_pain" >    neck_pain    </option>
              <option value="dizziness" >  dizziness      </option>
              <option value="cramps" >      cramps  </option>
              <option value="bruising" >bruising        </option>
              <option value="obesity" >obesity</option>
              <option value="swollen_legs" >   swollen_legs     </option>
              <option value="swollen_blood_vessels" >  swollen_blood_vessels      </option>
              <option value="puffy_face_and_eyes" >   puffy_face_and_eyes     </option>
              <option value="enlarged_thyroid" >  enlarged_thyroid      </option>
              <option value="brittle_nails" >  brittle_nails      </option>
              <option value="swollen_extremeties" >     swollen_extremeties   </option>
              <option value="excessive_hunger" >    excessive_hunger    </option>
              <option value="extra_marital_contacts" > extra_marital_contacts       </option>
              <option value="drying_and_tingling_lips" >   drying_and_tingling_lips     </option>
              <option value="slurred_speech" >  slurred_speech      </option>
              <option value="knee_pain" > knee_pain       </option>
              <option value="hip_joint_pain" >  hip_joint_pain      </option>
              <option value="muscle_weakness" > muscle_weakness       </option>
              <option value="stiff_neck" >  stiff_neck      </option>
              <option value="swelling_joints" >  swelling_joints      </option>
              <option value="movement_stiffness" > movement_stiffness       </option>
              <option value="spinning_movements" >    spinning_movements    </option>
              <option value="loss_of_balance" >  loss_of_balance   </option>
              <option value="unsteadiness" >    unsteadiness    </option>

              <option value="weakness_of_one_body_side" >   weakness_of_one_body_side       </option>
        <option value="loss_of_smell" >  loss_of_smell       </option>
        <option value="bladder_discomfort" >bladder_discomfort   </option>
        <option value="foul_smell_of_urine" >   foul_smell_of_urine       </option>
        <option value="continuous_feel_of_urine" >   continuous_feel_of_urine      </option>
        <option value="passage_of_gases" >   passage_of_gases      </option>
        <option value="internal_itching" >    internal_itching     </option>
        <option value="toxic_look_(typhos) " >   toxic_look_(typhos)   </option>
        <option value="depression" >   depression        </option>
        <option value="irritability" >   irritability        </option>
        <option value="muscle_pain" >   muscle_pain        </option>
        <option value="altered_sensorium" >   altered_sensorium       </option>
        <option value="red_spots_over_body" >   red_spots_over_body      </option>
        <option value="belly_pain" >   belly_pain        </option>
        <option value="abnormal_menstruation" >  abnormal_menstruation         </option>
        <option value="dischromic_patches" >   dischromic_patches        </option>
        <option value="watering_from_eyes" >    watering_from_eyes    </option>
        <option value="increased_appetite" >   increased_appetite    </option>
        <option value="polyuria" >  polyuria       </option>
        <option value="family_history" >   family_history       </option>
        <option value="mucoid_sputum" >  mucoid_sputum       </option>
        <option value="rusty_sputum" >   rusty_sputum      </option>
        <option value="lack_of_concentration" > lack_of_concentration   </option>
        <option value="visual_disturbances" > visual_disturbances  </option>
        <option value="receiving_blood_transfusion" > receiving_blood_transfusion     </option>
        <option value="receiving_unsterile_injections" >  receiving_unsterile_injections      </option>

         <option value="coma" > coma       </option>
          <option value="stomach_bleeding" >  stomach_bleeding      </option>
           <option value="distention_of_abdomen" >  distention_of_abdomen     </option> 
           <option value="history_of_alcohol_consumption" >   history_of_alcohol_consumption       </option>
           <option value="fluid_overload" > fluid_overload     </option>
           <option value="blood_in_sputum" > blood_in_sputum      </option>
           <option value="prominent_veins_on_calf" >  prominent_veins_on_calf     </option>
           <option value="palpitations" >   palpitations      </option>
           <option value="painful_walking" >  painful_walking      </option>

           <option value="pus_filled_pimples" >  pus_filled_pimples       </option>
           <option value="blackheads" >     blackheads </option>
           <option value="scurring" >  scurring        </option>

            <option value="skin_peeling" >   skin_peeling       </option> 

             <option value="silver_like_dusting" >   silver_like_dusting    </option>
             <option value="small_dents_in_nails" >     small_dents_in_nails   </option>

              <option value="inflammatory_nails" >    inflammatory_nails   </option>
               <option value="blister" >    blister      </option>
                <option value="red_sore_around_nose" >    red_sore_around_nose      </option>
                <option value="yellow_crust_ooze" >   yellow_crust_ooze       </option>

        
             
      </select>
      </div>
      

      <div className='opt'>
      <select   onChange={(e)=>setMydata2(e.target.value)} placeholder='Select Symtom'>
      <option value="" >  Choose      </option>
        <option value="back_pain" >  back_pain        </option>
        <option value="constipation" >  constipation       </option>
        <option value="abdominal_pain" >  abdominal_pain         </option>
        <option value="diarrhoea" >   diarrhoea        </option>
        <option value="mild_fever" >  mild_fever        </option>
        <option value="yellow_urine" >       yellow_urine </option>
        <option value="yellowing_of_eyes" >     yellowing_of_eyes   </option>
        <option value="acute_liver_failure" >    acute_liver_failure    </option>

           <option value="fluid_overload" >    fluid_overload    </option>
              <option value="swelling_of_stomach" >     swelling_of_stomach   </option>   
              <option value="swelled_lymph_nodes" >   swelled_lymph_nodes     </option>
              <option value="malaise" >   malaise     </option>
              <option value="blurred_and_distorted_vision" >  blurred_and_distorted_vision      </option>
              <option value="phlegm" >    phlegm    </option>
              <option value="throat_irritation" >  throat_irritation      </option>
              <option value="redness_of_eyes" >  redness_of_eyes      </option>
              <option value="sinus_pressure" >  sinus_pressure      </option>
              <option value="runny_nose" > runny_nose       </option>
              <option value="congestion" >   congestion     </option>
              <option value="chest_pain" >   chest_pain     </option>
              <option value="weakness_in_limbs" >   weakness_in_limbs     </option>
              <option value="fast_heart_rate" >   fast_heart_rate     </option>
              <option value="pain_during_bowel_movements" >  pain_during_bowel_movements      </option>
              <option value="pain_in_anal_region" >   pain_in_anal_region     </option>
              <option value="bloody_stool" >     bloody_stool   </option>
              <option value="irritation_in_anus" >  irritation_in_anus      </option>
              <option value="neck_pain" >    neck_pain    </option>
              <option value="dizziness" >  dizziness      </option>
              <option value="cramps" >      cramps  </option>
              <option value="bruising" >bruising        </option>
              <option value="obesity" >obesity</option>
              <option value="swollen_legs" >   swollen_legs     </option>
              <option value="swollen_blood_vessels" >  swollen_blood_vessels      </option>
              <option value="puffy_face_and_eyes" >   puffy_face_and_eyes     </option>
              <option value="enlarged_thyroid" >  enlarged_thyroid      </option>
              <option value="brittle_nails" >  brittle_nails      </option>
              <option value="swollen_extremeties" >     swollen_extremeties   </option>
              <option value="excessive_hunger" >    excessive_hunger    </option>
              <option value="extra_marital_contacts" > extra_marital_contacts       </option>
              <option value="drying_and_tingling_lips" >   drying_and_tingling_lips     </option>
              <option value="slurred_speech" >  slurred_speech      </option>
              <option value="knee_pain" > knee_pain       </option>
              <option value="hip_joint_pain" >  hip_joint_pain      </option>
              <option value="muscle_weakness" > muscle_weakness       </option>
              <option value="stiff_neck" >  stiff_neck      </option>
              <option value="swelling_joints" >  swelling_joints      </option>
              <option value="movement_stiffness" > movement_stiffness       </option>
              <option value="spinning_movements" >    spinning_movements    </option>
              <option value="loss_of_balance" >  loss_of_balance   </option>
              <option value="unsteadiness" >    unsteadiness    </option>

              <option value="weakness_of_one_body_side" >   weakness_of_one_body_side       </option>
        <option value="loss_of_smell" >  loss_of_smell       </option>
        <option value="bladder_discomfort" >bladder_discomfort   </option>
        <option value="foul_smell_of_urine" >   foul_smell_of_urine       </option>
        <option value="continuous_feel_of_urine" >   continuous_feel_of_urine      </option>
        <option value="passage_of_gases" >   passage_of_gases      </option>
        <option value="internal_itching" >    internal_itching     </option>
        <option value="toxic_look_(typhos) " >   toxic_look_(typhos)   </option>
        <option value="depression" >   depression        </option>
        <option value="irritability" >   irritability        </option>
        <option value="muscle_pain" >   muscle_pain        </option>
        <option value="altered_sensorium" >   altered_sensorium       </option>
        <option value="red_spots_over_body" >   red_spots_over_body      </option>
        <option value="belly_pain" >   belly_pain        </option>
        <option value="abnormal_menstruation" >  abnormal_menstruation         </option>
        <option value="dischromic_patches" >   dischromic_patches        </option>
        <option value="watering_from_eyes" >    watering_from_eyes    </option>
        <option value="increased_appetite" >   increased_appetite    </option>
        <option value="polyuria" >  polyuria       </option>
        <option value="family_history" >   family_history       </option>
        <option value="mucoid_sputum" >  mucoid_sputum       </option>
        <option value="rusty_sputum" >   rusty_sputum      </option>
        <option value="lack_of_concentration" > lack_of_concentration   </option>
        <option value="visual_disturbances" > visual_disturbances  </option>
        <option value="receiving_blood_transfusion" > receiving_blood_transfusion     </option>
        <option value="receiving_unsterile_injections" >  receiving_unsterile_injections      </option>

         <option value="coma" > coma       </option>
          <option value="stomach_bleeding" >  stomach_bleeding      </option>
           <option value="distention_of_abdomen" >  distention_of_abdomen     </option> 
           <option value="history_of_alcohol_consumption" >   history_of_alcohol_consumption       </option>
           <option value="fluid_overload" > fluid_overload     </option>
           <option value="blood_in_sputum" > blood_in_sputum      </option>
           <option value="prominent_veins_on_calf" >  prominent_veins_on_calf     </option>
           <option value="palpitations" >   palpitations      </option>
           <option value="painful_walking" >  painful_walking      </option>

           <option value="pus_filled_pimples" >  pus_filled_pimples       </option>
           <option value="blackheads" >     blackheads </option>
           <option value="scurring" >  scurring        </option>

            <option value="skin_peeling" >   skin_peeling       </option> 

             <option value="silver_like_dusting" >   silver_like_dusting    </option>
             <option value="small_dents_in_nails" >     small_dents_in_nails   </option>

              <option value="inflammatory_nails" >    inflammatory_nails   </option>
               <option value="blister" >    blister      </option>
                <option value="red_sore_around_nose" >    red_sore_around_nose      </option>
                <option value="yellow_crust_ooze" >   yellow_crust_ooze       </option>

        
             
      </select>
      </div>


     <div className='opt'>
      <select   onChange={(e)=>setMydata3(e.target.value)} placeholder='Select Symtom'>
      <option value="" >  Choose      </option>
        <option value="back_pain" >  back_pain        </option>
        <option value="constipation" >  constipation       </option>
        <option value="abdominal_pain" >  abdominal_pain         </option>
        <option value="diarrhoea" >   diarrhoea        </option>
        <option value="mild_fever" >  mild_fever        </option>
        <option value="yellow_urine" >       yellow_urine </option>
        <option value="yellowing_of_eyes" >     yellowing_of_eyes   </option>
        <option value="acute_liver_failure" >    acute_liver_failure    </option>

           <option value="fluid_overload" >    fluid_overload    </option>
              <option value="swelling_of_stomach" >     swelling_of_stomach   </option>   
              <option value="swelled_lymph_nodes" >   swelled_lymph_nodes     </option>
              <option value="malaise" >   malaise     </option>
              <option value="blurred_and_distorted_vision" >  blurred_and_distorted_vision      </option>
              <option value="phlegm" >    phlegm    </option>
              <option value="throat_irritation" >  throat_irritation      </option>
              <option value="redness_of_eyes" >  redness_of_eyes      </option>
              <option value="sinus_pressure" >  sinus_pressure      </option>
              <option value="runny_nose" > runny_nose       </option>
              <option value="congestion" >   congestion     </option>
              <option value="chest_pain" >   chest_pain     </option>
              <option value="weakness_in_limbs" >   weakness_in_limbs     </option>
              <option value="fast_heart_rate" >   fast_heart_rate     </option>
              <option value="pain_during_bowel_movements" >  pain_during_bowel_movements      </option>
              <option value="pain_in_anal_region" >   pain_in_anal_region     </option>
              <option value="bloody_stool" >     bloody_stool   </option>
              <option value="irritation_in_anus" >  irritation_in_anus      </option>
              <option value="neck_pain" >    neck_pain    </option>
              <option value="dizziness" >  dizziness      </option>
              <option value="cramps" >      cramps  </option>
              <option value="bruising" >bruising        </option>
              <option value="obesity" >obesity</option>
              <option value="swollen_legs" >   swollen_legs     </option>
              <option value="swollen_blood_vessels" >  swollen_blood_vessels      </option>
              <option value="puffy_face_and_eyes" >   puffy_face_and_eyes     </option>
              <option value="enlarged_thyroid" >  enlarged_thyroid      </option>
              <option value="brittle_nails" >  brittle_nails      </option>
              <option value="swollen_extremeties" >     swollen_extremeties   </option>
              <option value="excessive_hunger" >    excessive_hunger    </option>
              <option value="extra_marital_contacts" > extra_marital_contacts       </option>
              <option value="drying_and_tingling_lips" >   drying_and_tingling_lips     </option>
              <option value="slurred_speech" >  slurred_speech      </option>
              <option value="knee_pain" > knee_pain       </option>
              <option value="hip_joint_pain" >  hip_joint_pain      </option>
              <option value="muscle_weakness" > muscle_weakness       </option>
              <option value="stiff_neck" >  stiff_neck      </option>
              <option value="swelling_joints" >  swelling_joints      </option>
              <option value="movement_stiffness" > movement_stiffness       </option>
              <option value="spinning_movements" >    spinning_movements    </option>
              <option value="loss_of_balance" >  loss_of_balance   </option>
              <option value="unsteadiness" >    unsteadiness    </option>

              <option value="weakness_of_one_body_side" >   weakness_of_one_body_side       </option>
        <option value="loss_of_smell" >  loss_of_smell       </option>
        <option value="bladder_discomfort" >bladder_discomfort   </option>
        <option value="foul_smell_of_urine" >   foul_smell_of_urine       </option>
        <option value="continuous_feel_of_urine" >   continuous_feel_of_urine      </option>
        <option value="passage_of_gases" >   passage_of_gases      </option>
        <option value="internal_itching" >    internal_itching     </option>
        <option value="toxic_look_(typhos) " >   toxic_look_(typhos)   </option>
        <option value="depression" >   depression        </option>
        <option value="irritability" >   irritability        </option>
        <option value="muscle_pain" >   muscle_pain        </option>
        <option value="altered_sensorium" >   altered_sensorium       </option>
        <option value="red_spots_over_body" >   red_spots_over_body      </option>
        <option value="belly_pain" >   belly_pain        </option>
        <option value="abnormal_menstruation" >  abnormal_menstruation         </option>
        <option value="dischromic_patches" >   dischromic_patches        </option>
        <option value="watering_from_eyes" >    watering_from_eyes    </option>
        <option value="increased_appetite" >   increased_appetite    </option>
        <option value="polyuria" >  polyuria       </option>
        <option value="family_history" >   family_history       </option>
        <option value="mucoid_sputum" >  mucoid_sputum       </option>
        <option value="rusty_sputum" >   rusty_sputum      </option>
        <option value="lack_of_concentration" > lack_of_concentration   </option>
        <option value="visual_disturbances" > visual_disturbances  </option>
        <option value="receiving_blood_transfusion" > receiving_blood_transfusion     </option>
        <option value="receiving_unsterile_injections" >  receiving_unsterile_injections      </option>

         <option value="coma" > coma       </option>
          <option value="stomach_bleeding" >  stomach_bleeding      </option>
           <option value="distention_of_abdomen" >  distention_of_abdomen     </option> 
           <option value="history_of_alcohol_consumption" >   history_of_alcohol_consumption       </option>
           <option value="fluid_overload" > fluid_overload     </option>
           <option value="blood_in_sputum" > blood_in_sputum      </option>
           <option value="prominent_veins_on_calf" >  prominent_veins_on_calf     </option>
           <option value="palpitations" >   palpitations      </option>
           <option value="painful_walking" >  painful_walking      </option>

           <option value="pus_filled_pimples" >  pus_filled_pimples       </option>
           <option value="blackheads" >     blackheads </option>
           <option value="scurring" >  scurring        </option>

            <option value="skin_peeling" >   skin_peeling       </option> 

             <option value="silver_like_dusting" >   silver_like_dusting    </option>
             <option value="small_dents_in_nails" >     small_dents_in_nails   </option>

              <option value="inflammatory_nails" >    inflammatory_nails   </option>
               <option value="blister" >    blister      </option>
                <option value="red_sore_around_nose" >    red_sore_around_nose      </option>
                <option value="yellow_crust_ooze" >   yellow_crust_ooze       </option>

        
             
      </select>
      </div>

      <div className='opt'>
      <select   onChange={(e)=>setMydata4(e.target.value)} placeholder='Select Symtom'>
      <option value="" >  Choose      </option>
        <option value="back_pain" >  back_pain        </option>
        <option value="constipation" >  constipation       </option>
        <option value="abdominal_pain" >  abdominal_pain         </option>
        <option value="diarrhoea" >   diarrhoea        </option>
        <option value="mild_fever" >  mild_fever        </option>
        <option value="yellow_urine" >       yellow_urine </option>
        <option value="yellowing_of_eyes" >     yellowing_of_eyes   </option>
        <option value="acute_liver_failure" >    acute_liver_failure    </option>

           <option value="fluid_overload" >    fluid_overload    </option>
              <option value="swelling_of_stomach" >     swelling_of_stomach   </option>   
              <option value="swelled_lymph_nodes" >   swelled_lymph_nodes     </option>
              <option value="malaise" >   malaise     </option>
              <option value="blurred_and_distorted_vision" >  blurred_and_distorted_vision      </option>
              <option value="phlegm" >    phlegm    </option>
              <option value="throat_irritation" >  throat_irritation      </option>
              <option value="redness_of_eyes" >  redness_of_eyes      </option>
              <option value="sinus_pressure" >  sinus_pressure      </option>
              <option value="runny_nose" > runny_nose       </option>
              <option value="congestion" >   congestion     </option>
              <option value="chest_pain" >   chest_pain     </option>
              <option value="weakness_in_limbs" >   weakness_in_limbs     </option>
              <option value="fast_heart_rate" >   fast_heart_rate     </option>
              <option value="pain_during_bowel_movements" >  pain_during_bowel_movements      </option>
              <option value="pain_in_anal_region" >   pain_in_anal_region     </option>
              <option value="bloody_stool" >     bloody_stool   </option>
              <option value="irritation_in_anus" >  irritation_in_anus      </option>
              <option value="neck_pain" >    neck_pain    </option>
              <option value="dizziness" >  dizziness      </option>
              <option value="cramps" >      cramps  </option>
              <option value="bruising" >bruising        </option>
              <option value="obesity" >obesity</option>
              <option value="swollen_legs" >   swollen_legs     </option>
              <option value="swollen_blood_vessels" >  swollen_blood_vessels      </option>
              <option value="puffy_face_and_eyes" >   puffy_face_and_eyes     </option>
              <option value="enlarged_thyroid" >  enlarged_thyroid      </option>
              <option value="brittle_nails" >  brittle_nails      </option>
              <option value="swollen_extremeties" >     swollen_extremeties   </option>
              <option value="excessive_hunger" >    excessive_hunger    </option>
              <option value="extra_marital_contacts" > extra_marital_contacts       </option>
              <option value="drying_and_tingling_lips" >   drying_and_tingling_lips     </option>
              <option value="slurred_speech" >  slurred_speech      </option>
              <option value="knee_pain" > knee_pain       </option>
              <option value="hip_joint_pain" >  hip_joint_pain      </option>
              <option value="muscle_weakness" > muscle_weakness       </option>
              <option value="stiff_neck" >  stiff_neck      </option>
              <option value="swelling_joints" >  swelling_joints      </option>
              <option value="movement_stiffness" > movement_stiffness       </option>
              <option value="spinning_movements" >    spinning_movements    </option>
              <option value="loss_of_balance" >  loss_of_balance   </option>
              <option value="unsteadiness" >    unsteadiness    </option>

              <option value="weakness_of_one_body_side" >   weakness_of_one_body_side       </option>
        <option value="loss_of_smell" >  loss_of_smell       </option>
        <option value="bladder_discomfort" >bladder_discomfort   </option>
        <option value="foul_smell_of_urine" >   foul_smell_of_urine       </option>
        <option value="continuous_feel_of_urine" >   continuous_feel_of_urine      </option>
        <option value="passage_of_gases" >   passage_of_gases      </option>
        <option value="internal_itching" >    internal_itching     </option>
        <option value="toxic_look_(typhos) " >   toxic_look_(typhos)   </option>
        <option value="depression" >   depression        </option>
        <option value="irritability" >   irritability        </option>
        <option value="muscle_pain" >   muscle_pain        </option>
        <option value="altered_sensorium" >   altered_sensorium       </option>
        <option value="red_spots_over_body" >   red_spots_over_body      </option>
        <option value="belly_pain" >   belly_pain        </option>
        <option value="abnormal_menstruation" >  abnormal_menstruation         </option>
        <option value="dischromic_patches" >   dischromic_patches        </option>
        <option value="watering_from_eyes" >    watering_from_eyes    </option>
        <option value="increased_appetite" >   increased_appetite    </option>
        <option value="polyuria" >  polyuria       </option>
        <option value="family_history" >   family_history       </option>
        <option value="mucoid_sputum" >  mucoid_sputum       </option>
        <option value="rusty_sputum" >   rusty_sputum      </option>
        <option value="lack_of_concentration" > lack_of_concentration   </option>
        <option value="visual_disturbances" > visual_disturbances  </option>
        <option value="receiving_blood_transfusion" > receiving_blood_transfusion     </option>
        <option value="receiving_unsterile_injections" >  receiving_unsterile_injections      </option>

         <option value="coma" > coma       </option>
          <option value="stomach_bleeding" >  stomach_bleeding      </option>
           <option value="distention_of_abdomen" >  distention_of_abdomen     </option> 
           <option value="history_of_alcohol_consumption" >   history_of_alcohol_consumption       </option>
           <option value="fluid_overload" > fluid_overload     </option>
           <option value="blood_in_sputum" > blood_in_sputum      </option>
           <option value="prominent_veins_on_calf" >  prominent_veins_on_calf     </option>
           <option value="palpitations" >   palpitations      </option>
           <option value="painful_walking" >  painful_walking      </option>

           <option value="pus_filled_pimples" >  pus_filled_pimples       </option>
           <option value="blackheads" >     blackheads </option>
           <option value="scurring" >  scurring        </option>

            <option value="skin_peeling" >   skin_peeling       </option> 

             <option value="silver_like_dusting" >   silver_like_dusting    </option>
             <option value="small_dents_in_nails" >     small_dents_in_nails   </option>

              <option value="inflammatory_nails" >    inflammatory_nails   </option>
               <option value="blister" >    blister      </option>
                <option value="red_sore_around_nose" >    red_sore_around_nose      </option>
                <option value="yellow_crust_ooze" >   yellow_crust_ooze       </option>

        
             
      </select>
      </div>

      <div className='opt'>
      <select  onChange={(e)=>setMydata5(e.target.value)} placeholder='Select Symtom'>
      <option value="" >  Choose      </option>
        <option value="back_pain" >  back_pain        </option>
        <option value="constipation" >  constipation       </option>
        <option value="abdominal_pain" >  abdominal_pain         </option>
        <option value="diarrhoea" >   diarrhoea        </option>
        <option value="mild_fever" >  mild_fever        </option>
        <option value="yellow_urine" >       yellow_urine </option>
        <option value="yellowing_of_eyes" >     yellowing_of_eyes   </option>
        <option value="acute_liver_failure" >    acute_liver_failure    </option>

           <option value="fluid_overload" >    fluid_overload    </option>
              <option value="swelling_of_stomach" >     swelling_of_stomach   </option>   
              <option value="swelled_lymph_nodes" >   swelled_lymph_nodes     </option>
              <option value="malaise" >   malaise     </option>
              <option value="blurred_and_distorted_vision" >  blurred_and_distorted_vision      </option>
              <option value="phlegm" >    phlegm    </option>
              <option value="throat_irritation" >  throat_irritation      </option>
              <option value="redness_of_eyes" >  redness_of_eyes      </option>
              <option value="sinus_pressure" >  sinus_pressure      </option>
              <option value="runny_nose" > runny_nose       </option>
              <option value="congestion" >   congestion     </option>
              <option value="chest_pain" >   chest_pain     </option>
              <option value="weakness_in_limbs" >   weakness_in_limbs     </option>
              <option value="fast_heart_rate" >   fast_heart_rate     </option>
              <option value="pain_during_bowel_movements" >  pain_during_bowel_movements      </option>
              <option value="pain_in_anal_region" >   pain_in_anal_region     </option>
              <option value="bloody_stool" >     bloody_stool   </option>
              <option value="irritation_in_anus" >  irritation_in_anus      </option>
              <option value="neck_pain" >    neck_pain    </option>
              <option value="dizziness" >  dizziness      </option>
              <option value="cramps" >      cramps  </option>
              <option value="bruising" >bruising        </option>
              <option value="obesity" >obesity</option>
              <option value="swollen_legs" >   swollen_legs     </option>
              <option value="swollen_blood_vessels" >  swollen_blood_vessels      </option>
              <option value="puffy_face_and_eyes" >   puffy_face_and_eyes     </option>
              <option value="enlarged_thyroid" >  enlarged_thyroid      </option>
              <option value="brittle_nails" >  brittle_nails      </option>
              <option value="swollen_extremeties" >     swollen_extremeties   </option>
              <option value="excessive_hunger" >    excessive_hunger    </option>
              <option value="extra_marital_contacts" > extra_marital_contacts       </option>
              <option value="drying_and_tingling_lips" >   drying_and_tingling_lips     </option>
              <option value="slurred_speech" >  slurred_speech      </option>
              <option value="knee_pain" > knee_pain       </option>
              <option value="hip_joint_pain" >  hip_joint_pain      </option>
              <option value="muscle_weakness" > muscle_weakness       </option>
              <option value="stiff_neck" >  stiff_neck      </option>
              <option value="swelling_joints" >  swelling_joints      </option>
              <option value="movement_stiffness" > movement_stiffness       </option>
              <option value="spinning_movements" >    spinning_movements    </option>
              <option value="loss_of_balance" >  loss_of_balance   </option>
              <option value="unsteadiness" >    unsteadiness    </option>

              <option value="weakness_of_one_body_side" >   weakness_of_one_body_side       </option>
        <option value="loss_of_smell" >  loss_of_smell       </option>
        <option value="bladder_discomfort" >bladder_discomfort   </option>
        <option value="foul_smell_of_urine" >   foul_smell_of_urine       </option>
        <option value="continuous_feel_of_urine" >   continuous_feel_of_urine      </option>
        <option value="passage_of_gases" >   passage_of_gases      </option>
        <option value="internal_itching" >    internal_itching     </option>
        <option value="toxic_look_(typhos) " >   toxic_look_(typhos)   </option>
        <option value="depression" >   depression        </option>
        <option value="irritability" >   irritability        </option>
        <option value="muscle_pain" >   muscle_pain        </option>
        <option value="altered_sensorium" >   altered_sensorium       </option>
        <option value="red_spots_over_body" >   red_spots_over_body      </option>
        <option value="belly_pain" >   belly_pain        </option>
        <option value="abnormal_menstruation" >  abnormal_menstruation         </option>
        <option value="dischromic_patches" >   dischromic_patches        </option>
        <option value="watering_from_eyes" >    watering_from_eyes    </option>
        <option value="increased_appetite" >   increased_appetite    </option>
        <option value="polyuria" >  polyuria       </option>
        <option value="family_history" >   family_history       </option>
        <option value="mucoid_sputum" >  mucoid_sputum       </option>
        <option value="rusty_sputum" >   rusty_sputum      </option>
        <option value="lack_of_concentration" > lack_of_concentration   </option>
        <option value="visual_disturbances" > visual_disturbances  </option>
        <option value="receiving_blood_transfusion" > receiving_blood_transfusion     </option>
        <option value="receiving_unsterile_injections" >  receiving_unsterile_injections      </option>

         <option value="coma" > coma       </option>
          <option value="stomach_bleeding" >  stomach_bleeding      </option>
           <option value="distention_of_abdomen" >  distention_of_abdomen     </option> 
           <option value="history_of_alcohol_consumption" >   history_of_alcohol_consumption       </option>
           <option value="fluid_overload" > fluid_overload     </option>
           <option value="blood_in_sputum" > blood_in_sputum      </option>
           <option value="prominent_veins_on_calf" >  prominent_veins_on_calf     </option>
           <option value="palpitations" >   palpitations      </option>
           <option value="painful_walking" >  painful_walking      </option>

           <option value="pus_filled_pimples" >  pus_filled_pimples       </option>
           <option value="blackheads" >     blackheads </option>
           <option value="scurring" >  scurring        </option>

            <option value="skin_peeling" >   skin_peeling       </option> 

             <option value="silver_like_dusting" >   silver_like_dusting    </option>
             <option value="small_dents_in_nails" >     small_dents_in_nails   </option>

              <option value="inflammatory_nails" >    inflammatory_nails   </option>
               <option value="blister" >    blister      </option>
                <option value="red_sore_around_nose" >    red_sore_around_nose      </option>
                <option value="yellow_crust_ooze" >   yellow_crust_ooze       </option>

        
             
      </select>

      </div>

<div className='btn'>
  <button onClick={handledisease} >Predict</button>
</div>
      
    
<h2 className='ddddd'>{di.data}</h2>
{hospital && <TreatmentForm/>}
</div>


{/* <div className='footer'>
  <h1>Footer lga dena</h1>


  <div>
</div> */}
<div className='chatbot'>
<a href=' http://localhost:8501' target='_blank'><BsFillChatFill size={50}></BsFillChatFill></a>
</div>

    </div>
  );
}

export default Disease;