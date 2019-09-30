import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { TimelineComponent } from "views/examples/TimelineComponent";

// core components

function MemoryPageHeader() {
  let pageHeader = React.createRef();
let dataArray=[{
  key:"001",
  date:"08/01/2019-Present",
  img:"https://www.bing.com/images/search?view=detailV2&ccid=RSDd%2fFYg&id=15985C05E94012E425E64721715BB8AEDDB45A50&thid=OIP.RSDd_FYghwcEXFYjLpRvfwHaHa&mediaurl=https%3a%2f%2fodishasuntimes.com%2fwp-content%2fuploads%2f2017%2f04%2fgoogle.jpg&exph=900&expw=900&q=google+image&simid=608037819134575287&selectedIndex=2",
  title:"Title1",
  subTitle:"SubTitle",
  content:`Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
  exercitation. Veniam velit adipisicing anim excepteur nostrud magna
  nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
  reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
  est.`
},
{
  key:"002",
  date:"08/01/2019-Present",
  img:"https://odishasuntimes.com/wp-content/uploads/2017/04/google.jpg",
  title:"Title2",
  subTitle:"SubTitle",
  content:`Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
  exercitation. Veniam velit adipisicing anim excepteur nostrud magna
  nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
  reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
  est.`
},
{
  key:"003",
  date:"08/01/2019-Present",
  img:"https://odishasuntimes.com/wp-content/uploads/2017/04/google.jpg",
  title:"Title3",
  subTitle:"SubTitle",
  content:`Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
  exercitation. Veniam velit adipisicing anim excepteur nostrud magna
  nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
  reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
  est.`
}]
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Memory Page put your content in here</h1>
            {
            dataArray.map((item,index)=><TimelineComponent data={item} index={index}/>)
            }
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default MemoryPageHeader;
