import React, { useState } from 'react';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Monday', content: 'Content for Tab 1',p1:'10:00am-11:00am- Nigeria this morning', p2:'11:00-11:55am Motivational Music', p3:'12:00 noon Mid day News', p4:'1:00pm -1:55pm  E ma yase ', p5:'2:00pm -3:00pm Captured', p6:'3;00pm -3:15pm National News ', p7:'6;00pm: World News',  },
    { title: 'Tuesday', content: 'Content for Tab 2', p1:'10:00am-11:00am- Nigeria this morning', p2:'11:00am - 11:55am Music', p3:'12noon Mid-day News ', p4:'1:00pm - 1:55pm E ma yase ', p5:'2:00pm -3:00pm Captured', p6:'3;00pm -3:15pm National News ', p7:'6;00pm: World News', p8:'8:00pm -8:55pm Love is not enough ',},
    { title: 'Wednesday', content: 'Content for Tab 3',p1:'10:00am-11:00am- Nigeria this morning', p2:'11:30am - 11:55am Thumbs up', p3:'12:00 noon Mid day News', p4:'12:30pm - 12:55 Movie heads up ', p5:'1:00pm -1:55pm E ma yase', p6:'2:00pm -2:55pm Captured  ', p7:'3:00pm -3:15pm National News ', p8:'6:00pm -6:15pm World News  ',  p9:'  6:30pm -6:55pm Turning point' },
    { title: 'Thursday', content: 'Content for Tab 4',p1:'10:00am-11:00am- Nigeria this morning', p2:'11:00-11:55am  Music', p3:'12:00 noon Mid day News', p4:'1:00pm -1:55pm  E ma yase ', p5:'2:00pm -3:00pm Captured', p6:'3;00pm -3:15pm National News ', p7:'6;00pm: World News', },
    { title: 'Friday', content: 'Content for Tab 5',p1:'10:00am-11:00am- Nigeria this morning', p2:'11:00-11:55am  Music', p3:'12:00 noon Mid day News', p4:'12:15pm -12:55pm Islamic show', p5:'1:00pm -1:55pm - E ma yase', p6:'2:00pm -2:55pm Captured  ', p7:'3:00pm - 3:15pm National News ', p8:'3:30pm -3:55pm Journalists round table ', p9:'4:00pm- 4:25pm Learning adventure  ',  p10:'5:00pm -5:45pm Corpers lounge   ', p11:'6:00pm -6:15pm World News ', },


  ];

  return (
    <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.title}
          </button>
        ))}

      </div>
      <hr className='tab-hr' />

      <div className="tab-content">
        {/* <h1>{tabs[activeTab].title}</h1>
        <p>{tabs[activeTab].content}</p> */}
        <h4>{tabs[activeTab].p1}</h4>
        <h4>{tabs[activeTab].p2}</h4>
        <h4>{tabs[activeTab].p3}</h4>
        <h4>{tabs[activeTab].p4}</h4>
        <h4>{tabs[activeTab].p5}</h4>
        <h4>{tabs[activeTab].p6}</h4>
        <h4>{tabs[activeTab].p7}</h4>
        <h4>{tabs[activeTab].p8}</h4>
        <h4>{tabs[activeTab].p9}</h4>
        <h4>{tabs[activeTab].p10}</h4>
        <h4>{tabs[activeTab].p11}</h4>








      </div>
    </div>
  );
};

export default TabMenu;