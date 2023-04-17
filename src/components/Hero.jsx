import { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const selectBoxRef = useRef(null);
  const selectItemsRef = useRef(null);

  useEffect(() => {
    const selectBox = selectBoxRef.current;
    const selectItems = selectItemsRef.current;

    function toggleSelect() {
      const selectBox = selectBoxRef.current;
      const selectItems = selectItemsRef.current;
      if (selectBox && selectItems) {
        if (selectItems.classList.contains("select-hide")) {
          selectBox.classList.add("select-arrow-active");
          selectItems.classList.remove("select-hide");

        } else {
          selectBox.classList.remove("select-arrow-active");
          selectItems.classList.add("select-hide");
        }
      }
    }
    selectBox.addEventListener("click", toggleSelect);

    return () => {
      selectBox.removeEventListener("click", toggleSelect);
    };
  }, []);

  return (
    <div
      className="Hero text-white text-center"
      style={{ backgroundImage: "url(./background.png)" }}
    >
      <Container>
        <div className="d-flex justify-content-center">
          <div>
            <h2 className="">H2 WHY ANSWER THE QUESTIONS IN TWO LINES</h2>
          </div>
        </div>
      </Container>
      <Container className="">
        <div className="custom-select">
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}

          >
            <option value="">-- Válassz --</option>
            <option value="option1">Opció 1</option>
            <option value="option2">Opció 2</option>
            <option value="option3">Opció 3</option>
          </select>

          <div className="select-selected" ref={selectBoxRef}>
            {selectedValue ? selectedValue : "-- Válassz --"}
          </div>
          <div id="select-items" className="select-items select-hide" ref={selectItemsRef}>
            <div onClick={() => { setSelectedValue("option1"); }}>
              Opció 1
            </div>
            <div onClick={() => { setSelectedValue("option2"); }}>
              Opció 2
            </div>
            <div onClick={() => { setSelectedValue("option3"); }}>
              Opció 3
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;


{/* <Container>
        <div className="d-flex justify-content-center">
          <div>
            <h2 className="">H2 WHY REGISTER HERE  AND NOW ( IN THREE LINE) SINCE THIS STEP IS CRITICAL</h2>
          </div>
        </div>
      </Container>
      <Container className="checkbox d-flex ">
        <div class="">
          <input class="" type="checkbox" value="" id="flexCheckDefault" />
          <label class="" for="flexCheckDefault"> Mrs. </label>
        </div>
        <div class="form-check">
          <input class="" type="checkbox" value="" id="flexCheckDefault" />
          <label class="" for="flexCheckDefault"> Mrs. </label>
        </div>
        <div class="form-check">
          <input class="" type="checkbox" value="" id="flexCheckDefault" />
          <label class="" for="flexCheckDefault"> Mrs. </label>
        </div>
        <div class="form-check">
          <input class="" type="checkbox" value="" id="flexCheckDefault" />
          <label class="" for="flexCheckDefault"> Mrs. </label>
        </div>
      </Container>
      <Container className="contactus-container border-bottom border-white">
        <Col>
          <div className="row g-3" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <div className="col-lg-4">
              <input type="text" className="form-control border-bottom rounded-0 p-0 text-white pb-3 " placeholder="Last name*" aria-label="Last name"></input>
            </div>
            <div className="col-lg-4">
              <input type="text" className="form-control border-bottom rounded-0 p-0 text-white pb-3" placeholder="First name*" aria-label="First name"></input>
            </div>
          </div>
        </Col>
        <Col>
          <div className="row g-3" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <div className="col-lg-4">
              <input type="text" className="form-control border-bottom rounded-0 p-0 text-white pb-3 " placeholder="Last name*" aria-label="Last name"></input>
            </div>
            <div className="col-lg-4">
              <input type="text" className="form-control border-bottom rounded-0 p-0 text-white pb-3" placeholder="First name*" aria-label="First name"></input>
            </div>
          </div>
        </Col>

        <div className="d-flex flex-column align-items-start">
          <div>
            <input class="" type="checkbox" value="" id="flexCheckDefault" />
            <label class="" for="flexCheckDefault">By registration, i agree to KLM's </label>
          </div>
          <div>
            <input class="" type="checkbox" value="" id="flexCheckDefault" />
            <label class="" for="flexCheckDefault">By registration, i agree to KLM's  </label>
          </div>
          <div>
            <input class="" type="checkbox" value="" id="flexCheckDefault" />
            <label class="" for="flexCheckDefault">By registration, i agree to KLM's  </label>
          </div>
        </div>

        <button className="mb-5">REGISTER</button>
      </Container> */}
