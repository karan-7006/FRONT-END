import React from "react";
import ClassProps from "./ClassProps";

function MainProps() {
  return (
    <div>
      {/* <h1>Hello, This is Main Props</h1> */}
      <div className="container">
        <h1>Class Props</h1>
        <div className="row">
          <ClassProps
            title="Nature"
            description="Beginning of a new life"
            img="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <ClassProps
            title="Sky"
            description="Hot air balloon in the sky"
            img="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          <ClassProps
            title="Humming Bird"
            description="A hummingbird in the garden"
            img="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          <ClassProps
            title="Mountains"
            description="Beautiful mountains at dawn"
            img="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600"
          />


          <ClassProps
            title="Korean Girl"
            description="Beautiful girl in the garden"
            img="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"
          />


          <ClassProps
            title="Sunflowers"
            description="Sunflowers in the field"
            img="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>

      <div className="container">
        <h1>Funtion Props</h1>
        <div className="row">
          <ClassProps
            title="Forest"
            description="A serene forest path"
            img="https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          <ClassProps
            title="Ocean Waves"
            description="Waves crashing on the shore"
            img="https://images.pexels.com/photos/3282189/pexels-photo-3282189.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          <ClassProps
            title="City Lights"
            description="City skyline at night"
            img="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
    </div>
  );
}

export default MainProps;
