import React from 'react'

export default function Prompt() {
  return (
    <div>
             <div className="loginEmail1">
          <input
            type="number"
            placeholder="Amount of weight to loose"

          />
        </div>

        <div className="loginEmail1">
          <input
            type="number"
            placeholder="time "
   
          />
        </div>
        <input type="submit" value="Get plan" className="loginBtn" />

        

    </div>
  )
}
