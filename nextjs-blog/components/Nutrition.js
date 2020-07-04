import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Nutrition = () => {
  return (
    <Container>
      <Row>
        <Col md="4">
          <img src="/images/Nutrition.jpg" alt={"Nutrition-image"}></img>
        </Col>
        <Col md="4" style={{ width: "auto" }}>
          <p id="lbl" style={{ textAlign: "center" }}>
            Nutrition Search: Type in a food!
          </p>
          <div className="main">
            <input id="search" type="text" />
            <input id="submitBtn" type="submit" defaultValue="Search" />
          </div>
        </Col>
        <Col md="4">
          <p id="lbl" style={{ textAlign: "center" }}>
            Nutritional Values
          </p>
          <div id="monitor-data" className="value-container">
            <p className="health-data">
              <span id="calories" />{" "}
            </p>
            <p className="health-data">
              <span id="total-fats" />
            </p>
            <p className="health-data">
              <span id="sodium" />
            </p>
            <p className="health-data">
              <span id="sugars" />
            </p>
            <p className="health-data">
              <span id="protein" />
            </p>
            <p className="health-data">
              <span id="serving-size" />
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Nutrition;

// var Nutrition = React.createClass({
//   render: function () {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0FjdzsLBZpQJ-2AMOMKdDEsHj4MJHnFkifkmKNPs5ofRSjFUU&usqp=CAU"
//               alt="Nutrition image"
//               height="auto"
//               width="auto"
//             />
//           </div>
//           <div className="col-md-4" style={{ width: "auto" }}>
//             <p id="lbl" style={{ textAlign: "center" }}>
//               Nutrition Search: Type in a food!
//             </p>
//             <div className="main">
//               <input id="search" type="text" />
//               <input id="submitBtn" type="submit" defaultValue="Search" />
//             </div>
//           </div>
//           <div className="col-md-4">
//             <p id="lbl" style={{ textAlign: "center" }}>
//               Nutritional Values
//             </p>
//             <div id="monitor-data" className="value-container">
//               <p className="health-data">
//                 <span id="calories" />{" "}
//               </p>
//               <p className="health-data">
//                 <span id="total-fats" />
//               </p>
//               <p className="health-data">
//                 <span id="sodium" />
//               </p>
//               <p className="health-data">
//                 <span id="sugars" />
//               </p>
//               <p className="health-data">
//                 <span id="protein" />
//               </p>
//               <p className="health-data">
//                 <span id="serving-size" />
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   },
// });
