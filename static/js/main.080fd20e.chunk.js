(this["webpackJsonptask-timer"]=this["webpackJsonptask-timer"]||[]).push([[0],{237:function(e,t,a){e.exports=a(429)},429:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),o=a.n(s),i=a(40),m=a(201),c=a(18),l="START_TASK",u="STOP_TASK",p="SET_TIME",d="SET_TASK_NAME",f="SYNC_TASK_PROPS",k=function(e){return{type:u,payload:e}},T=function(e){return{type:f,payload:e}},h={time:"00:00:00",taskProps:{id:null,taskName:null,timerStartTime:null,timerStopTime:null}};var E="OPEN_ALERT_WINDOW",b=function(e){return{type:E,payload:e}},v={taskNameIsEmpty:!1};var y=a(31),O="PUSH_TASK_IN_TASKS_LIST",S="SYNC_STATE_FROM_STORAGE",g="SAVE_CURRENT_TASK",N="SET_TASKS_LIST_VALUE",j=function(e){return{type:S,payload:e}},C=function(e){return{type:g,payload:e}},I=function(e){return{type:N,payload:e}},D={tasksList:[],task:[]};var x=Object(i.c)({timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)({},e,{taskProps:Object(c.a)({},e.taskProps,{timerStopTime:null,timerStartTime:t.payload})});case u:return Object(c.a)({},e,{taskProps:h.taskProps});case p:return Object(c.a)({},e,{time:t.payload});case d:return Object(c.a)({},e,{taskProps:Object(c.a)({},e.taskProps,{taskName:t.payload})});case f:return Object(c.a)({},e,{taskProps:Object(c.a)({},e.taskProps,{},t.payload)});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(c.a)({},e,{taskNameIsEmpty:t.payload});default:return e}},tasksLog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(c.a)({},e,{tasksList:[].concat(Object(y.a)(e.tasksList),[t.payload])});case N:return Object(c.a)({},e,{tasksList:t.payload});case S:return Object(c.a)({},e,{tasksList:[].concat(Object(y.a)(e.tasksList),Object(y.a)(t.payload))});case g:return Object(c.a)({},e,{task:t.payload});default:return e}}}),w=a(30),L=a(33),A=a.n(L),P=a(35),_=A.a.mark(F),B=A.a.mark(H),M=A.a.mark(K),R=A.a.mark(W);function F(){var e,t,a,n,r;return A.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(P.c)(300);case 2:return s.next=4,Object(P.e)();case 4:return e=s.sent,t=e.timer.taskProps,a=t.timerStartTime,n=t.taskName,r=e.tasksLog.tasksList,s.next=11,Object(P.b)((function(){localStorage.setItem("tasksList",JSON.stringify(r)),localStorage.setItem("startTimeAndTaskName",JSON.stringify({timerStartTime:a,taskName:n}))}));case 11:case"end":return s.stop()}}),_)}function H(){var e,t;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(P.b)((function(){return JSON.parse(localStorage.getItem("tasksList"))||[]}));case 2:return e=a.sent,a.next=5,Object(P.b)((function(){return JSON.parse(localStorage.getItem("startTimeAndTaskName"))||k()}));case 5:return t=a.sent,a.next=8,Object(P.d)(j(e));case 8:return a.next=10,Object(P.d)(T(t));case 10:case"end":return a.stop()}}),B)}function K(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.b)(H);case 2:return e.next=4,Object(P.f)("*",F);case 4:case"end":return e.stop()}}),M)}function W(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)([K()]);case 2:case"end":return e.stop()}}),R)}var z=a(29),J=a(50),V=a(456),U=a(459),Y=a(460),G=a(462),$=a(461),q=a(463),Q=a(9);var X=Object(Q.a)({container:{paddingTop:"10%","& h4":{color:"#00BCD3",paddingBottom:"1rem"}},buttonContainer:{display:"flex",justifyContent:"flex-end",paddingRight:"1rem",paddingBottom:".5rem","& span":{color:"#00BCD3"}}})((function(e){var t=e.classes,a=t.container,n=t.buttonContainer;return r.a.createElement(V.a,{container:!0,className:a,justify:"center"},r.a.createElement(U.a,null,r.a.createElement(Y.a,null,r.a.createElement($.a,{variant:"h4"},"There is no such task :("),r.a.createElement($.a,{color:"textSecondary"},"Can try to find it on the home page?")),r.a.createElement(G.a,{className:n},r.a.createElement(q.a,{size:"small",component:z.b,to:"/tasks"},"Homepage"))))})),Z=a(470),ee=a(472),te=a(471),ae=a(93),ne=a(48),re=a(188),se=a(189),oe=a(202),ie=a(11),me=a(474),ce=a(464);function le(e){var t=e.verifyTaskName,a=e.setTaskName,n=e.startTimer,s=e.timerStartTime,o=e.taskName,i=e.time,m=e.classes,c=m.timerContainer,l=m.taskInput,u=m.timerFab,p=m.timerButton;return r.a.createElement("div",{className:c},r.a.createElement(me.a,{label:"Name of your task",placeholder:"Name of your task",className:l,value:o||"",onChange:function(e){return a(e.target.value)}}),r.a.createElement(ce.a,{className:u},i),s?r.a.createElement(q.a,{variant:"contained",size:"small",className:p,onClick:t},"STOP"):r.a.createElement(q.a,{variant:"contained",size:"small",className:p,onClick:n},"START"))}var ue={timerContainer:{display:"flex",alignItems:"center",flexDirection:"column"},taskInput:{"& $input::placeholder":{color:"#4823C2",textAlign:"center",opacity:1}},timerFab:{width:"10rem",height:"10rem",margin:"1.5rem",background:"white",color:"#4823C2",fontSize:"1.5rem"},timerButton:{color:"#4823C2",background:"white",marginBottom:"1.5rem"}},pe=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(re.a)(this,(e=Object(se.a)(t)).call.apply(e,[this].concat(r)))).startTimerWhenPageReset=function(){a.setCurrentTime(),a.timer()},a.timer=function(){setInterval((function(){return a.props.taskProps.timerStartTime?a.setCurrentTime():a.props.setTime("00:00:00")}),1e3)},a.setCurrentTime=function(){a.props.setTime(ie.Interval.fromDateTimes(ie.DateTime.fromISO(a.props.taskProps.timerStartTime),ie.DateTime.local()).toDuration().toFormat("hh:mm:ss"))},a.startTimer=function(){a.props.startTask(ie.DateTime.local().toISO())},a.verifyTaskName=function(){var e=a.props,t=e.taskProps,n=e.openAlertWindow;t.taskName?a.stopTimer():n(!0)},a.stopTimer=function(){var e=a.props,t=e.taskProps,n=e.stopTask,r=e.pushTaskInTasksList;n(),r(Object(c.a)({},t,{id:a.createTaskId(),timerStopTime:ie.DateTime.local().toISO()})),clearInterval(a.timer)},a.createTaskId=function(){var e=a.props.tasksList,t=Math.max.apply(Math,Object(y.a)(e.map((function(e){return e.id}))));return t>0?t+1:1},a}return Object(oe.a)(t,e),Object(ne.a)(t,[{key:"componentDidMount",value:function(){this.props.taskProps.timerStartTime?this.startTimerWhenPageReset():this.timer()}},{key:"render",value:function(){var e=this.props,t=e.time,a=e.classes,n=e.setTaskName,s=e.taskProps,o=s.timerStartTime,i=s.taskName;return r.a.createElement(le,{verifyTaskName:this.verifyTaskName,startTimer:this.startTimer,setTaskName:n,timerStartTime:o,taskName:i,time:t,classes:a})}}]),t}(n.Component),de={pushTaskInTasksList:function(e){return{type:O,payload:e}},setTaskName:function(e){return{type:d,payload:e}},startTask:function(e){return{type:l,payload:e}},stopTask:k,setTime:function(e){return{type:p,payload:e}},openAlertWindow:b},fe=Object(w.b)((function(e){var t=e.timer,a=e.tasksLog;return{time:t.time,taskProps:t.taskProps,tasksList:a.tasksList}}),de)(Object(Q.a)(ue)(pe)),ke=a(473);function Te(e){var t=e.openAlertWindow,a=e.taskNameIsEmpty,n=e.classes,s=n.buttonContainer,o=n.modalContainer,i=n.modalContent,m=n.alertContent,c=n.alertName,l=n.modal;return r.a.createElement(ke.a,{"aria-describedby":"simple-modal-description","aria-labelledby":"simple-modal-title",className:o,open:a},r.a.createElement("div",{className:l},r.a.createElement(V.a,{container:!0,className:i},r.a.createElement($.a,{variant:"h6",id:"modal-title",className:c},"Empty task name"),r.a.createElement($.a,{id:"simple-modal-description",className:m,variant:"subtitle1"},"You are trying close your task without name, enter the title and try again!")),r.a.createElement("div",{className:s},r.a.createElement(q.a,{onClick:function(){t(!1)}},"Close"))))}var he={openAlertWindow:b},Ee=Object(w.b)((function(e){return{taskNameIsEmpty:e.alert.taskNameIsEmpty}}),he)(Object(Q.a)({modalContainer:{display:"flex",alignItems:"center",justifyContent:"center"},modal:{display:"flex",flexDirection:"column",width:"60%",boxShadow:"1px 2px 5px black",backgroundColor:"#fff"},modalContent:{flexDirection:"column",padding:"1.5rem"},buttonContainer:{display:"flex",justifyContent:"flex-end",paddingRight:"1rem",paddingBottom:".5rem","& span":{color:"#00BCD3"}},alertName:{paddingBottom:"1rem",color:"#CA0045"},alertContent:{opacity:.7}})((function(e){var t=e.taskNameIsEmpty,a=e.openAlertWindow,n=e.classes;return r.a.createElement(Te,{openAlertWindow:a,taskNameIsEmpty:t,classes:n})}))),be=function(e){for(var t=[],a=function(a){var n=ie.DateTime.fromObject({hour:a,minute:0,second:0}),r=ie.DateTime.fromObject({hour:a,minute:59,second:59}),s=ie.Interval.fromDateTimes(n,r),o=e.filter((function(e){return s.intersection(ie.Interval.fromDateTimes(ie.DateTime.fromISO(e.timerStartTime),ie.DateTime.fromISO(e.timerStopTime)))})),i=0;o.length>0&&(i=o.reduce((function(e,t){var n,r=ie.DateTime.fromISO(t.timerStartTime),s=ie.DateTime.fromISO(t.timerStopTime);return n=r.hour===a&&s.hour===a?ie.Interval.fromDateTimes(r,s).toDuration("minutes").toObject().minutes:r.hour===a?60-r.minute:s.hour===a?s.minute:60,e+Math.round(n)}),0)),t.push({hour:a,minutes:60,tasksTimeInThisHour:i||0})},n=0;n<24;n++)a(n);return t},ve=a(19);function ye(e){var t=e.getRandomTasks,a=e.chartData,n=e.classes,s=n.generateButtonContainer,o=n.generateButton;return r.a.createElement("div",null,r.a.createElement(ve.e,{id:"container",width:"95%",height:300},r.a.createElement(ve.b,{data:a,margin:{top:20}},r.a.createElement(ve.c,{strokeDasharray:"3 3"}),r.a.createElement(ve.g,{dataKey:"hour"}),r.a.createElement(ve.h,{dataKey:"minutes"}),r.a.createElement(ve.f,null),r.a.createElement(ve.d,null),r.a.createElement(ve.a,{dataKey:"tasksTimeInThisHour",name:"Minutes in this hours",barSize:20,fill:"#4823C2"}))),r.a.createElement(V.a,{container:!0,className:s},r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(q.a,{className:o,variant:"contained",size:"small",onClick:function(){return t()}},"Generate"))))}var Oe={generateButtonContainer:{justifyContent:"justify-end",textAlign:"right",padding:"1rem 0"},generateButton:{color:"#4823C2",background:"white"}},Se=function(e,t){return Math.floor(Math.random()*(t-e)+e+1)};var ge={setTasksListValue:I},Ne=Object(w.b)((function(e){return{tasksList:e.tasksLog.tasksList}}),ge)(Object(Q.a)(Oe)((function(e){var t=e.setTasksListValue,a=e.tasksList,n=e.classes,s=be(a);return r.a.createElement(ye,{getRandomTasks:function(){for(var e=[],a=ie.DateTime.fromObject({hour:0,minute:0,second:0}),n=null,r=Se(10,16),s=1;s<r;s++)n=(a=a.plus({seconds:Se(0,5400)})).plus({seconds:Se(600,5400)}),e.push({id:s,taskName:"Random task #".concat(s),timerStartTime:a,timerStopTime:n}),a=n;t(e)},chartData:s,classes:n})}))),je=a(465),Ce=a(469),Ie=a(468),De=a(466),xe=a(467);function we(e){var t=e.deleteCurrentTask,a=e.saveCurrentTask,n=e.tasksList,s=e.classes,o=s.tableRow,i=s.noTasks,m=s.tasksButton;return r.a.createElement(je.a,null,r.a.createElement(De.a,null,r.a.createElement(xe.a,null,r.a.createElement(Ie.a,null,"\u2116"),r.a.createElement(Ie.a,null,"Task"),r.a.createElement(Ie.a,null,"Time start"),r.a.createElement(Ie.a,null,"Time end"),r.a.createElement(Ie.a,null,"Time spend"),r.a.createElement(Ie.a,null,"Info"),r.a.createElement(Ie.a,null,"Delete"))),r.a.createElement(Ce.a,null,n.length>0?n.map((function(e){return r.a.createElement(xe.a,{key:e.id,className:o},r.a.createElement(Ie.a,{component:"th",scope:"row"},e.id),r.a.createElement(Ie.a,null,e.taskName),r.a.createElement(Ie.a,null,ie.DateTime.fromISO(e.timerStartTime).toFormat("HH:mm:ss")),r.a.createElement(Ie.a,null,ie.DateTime.fromISO(e.timerStopTime).toFormat("HH:mm:ss")),r.a.createElement(Ie.a,null,ie.Interval.fromDateTimes(ie.DateTime.fromISO(e.timerStartTime),ie.DateTime.fromISO(e.timerStopTime)).toDuration().toFormat("hh:mm:ss")),r.a.createElement(Ie.a,null,r.a.createElement(q.a,{className:m,variant:"contained",size:"small",onClick:function(){return a(e)},component:z.b,to:"/tasks/".concat(e.id)},"Info")),r.a.createElement(Ie.a,null,r.a.createElement(q.a,{className:m,variant:"contained",size:"small",onClick:function(){return t(e.id)}},"Delete")))})):r.a.createElement(xe.a,{className:o},r.a.createElement(Ie.a,{className:i,colSpan:7},"No tasks to show"))))}var Le={tableRow:{background:"#E8F6FF",color:"#4823C2"},noTasks:{textAlign:"center"},tasksButton:{color:"#4823C2",background:"white"}};var Ae={saveCurrentTask:C,setTasksListValue:I},Pe=Object(w.b)((function(e){return{tasksList:e.tasksLog.tasksList}}),Ae)(Object(Q.a)(Le)((function(e){var t=e.saveCurrentTask,a=e.setTasksListValue,n=e.tasksList,s=e.classes;return r.a.createElement(we,{deleteCurrentTask:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)},saveCurrentTask:t,tasksList:n,classes:s})}))),_e={tasksTimerContainer:{padding:"2rem"},tabsContainer:{background:"#00BCD3",boxShadow:"none"}};var Be=Object(Q.a)(_e)((function(e){var t=e.location,a=e.classes,n=a.tasksTimerContainer,s=a.tabsContainer,o="/chart"===t.pathname?"Chart":"Log";return r.a.createElement("div",{className:n},r.a.createElement(V.a,{container:!0,justify:"center"},r.a.createElement(V.a,{item:!0,xs:12,lg:10},r.a.createElement(Ee,null),r.a.createElement(fe,null)),r.a.createElement(V.a,{item:!0,xs:12,lg:10},r.a.createElement("section",null,r.a.createElement(Z.a,{position:"relative",className:s},r.a.createElement(ee.a,{variant:"fullWidth",value:o},r.a.createElement(te.a,{value:"Log",label:"Tasks log",component:z.b,to:"/tasks"}),r.a.createElement(te.a,{value:"Chart",label:"Tasks chart",component:z.b,to:"/chart"}))),r.a.createElement(J.b,{path:"/tasks",exact:!0,component:Pe}),r.a.createElement(J.b,{path:"/chart",exact:!0,component:Ne})))))}));function Me(e){var t=e.task,a=e.classes,n=a.card,s=a.taskName,o=a.buttonContainer,i=a.button;return r.a.createElement(U.a,{key:t.id,className:n},r.a.createElement(Y.a,null,r.a.createElement($.a,{className:s,variant:"h4",component:"h2"},"Task name: ".concat(t.taskName)),r.a.createElement($.a,{component:"p"},ie.DateTime.fromISO(t.timerStartTime).toFormat("'The timer was started on' yyyy-MM-dd 'at' HH:mm:ss")),r.a.createElement($.a,{component:"p"},ie.DateTime.fromISO(t.timerStopTime).toFormat("'The timer was stopped on' yyyy-MM-dd 'at' HH:mm:ss")),r.a.createElement($.a,{component:"p"},ie.Interval.fromDateTimes(ie.DateTime.fromISO(t.timerStartTime),ie.DateTime.fromISO(t.timerStopTime)).toDuration().toFormat("'Time spent on task:' hh:mm:ss"))),r.a.createElement(G.a,{className:o},r.a.createElement(q.a,{className:i,size:"small",component:z.b,to:"/"},"Back")))}function Re(e){var t=e.dataForChart;return r.a.createElement(ve.e,{id:"container",width:"80%",height:300},r.a.createElement(ve.b,{data:t,margin:{top:20}},r.a.createElement(ve.c,{strokeDasharray:"3 3"}),r.a.createElement(ve.g,{dataKey:"hour"}),r.a.createElement(ve.h,{dataKey:"minutes"}),r.a.createElement(ve.f,null),r.a.createElement(ve.d,null),r.a.createElement(ve.a,{dataKey:"tasksTimeInThisHour",name:"Minutes in this hours",barSize:20,fill:"#4823C2"})))}var Fe=function(e){for(var t=[],a=[{startTime:function(){var t=ie.DateTime.fromISO(e.timerStartTime);return{hour:t.hour,minute:t.minute,second:t.second}}(),stopTime:function(){var t=ie.DateTime.fromISO(e.timerStopTime);return{hour:t.hour,minute:t.minute,second:t.second}}()}],n=function(e){var n=ie.DateTime.fromObject({hour:e,minute:0,second:0}),r=ie.DateTime.fromObject({hour:e,minute:59,second:59}),s=ie.Interval.fromDateTimes(n,r),o=a.filter((function(e){return s.intersection(ie.Interval.fromDateTimes(ie.DateTime.fromObject(e.startTime),ie.DateTime.fromObject(e.stopTime)))})),i=0;o&&o.length>0&&(i=o.reduce((function(t,a){var n,r=ie.DateTime.fromObject(a.startTime),s=ie.DateTime.fromObject(a.stopTime);return n=r.hour===e&&s.hour===e?ie.Interval.fromDateTimes(r,s).toDuration("minutes").toObject().minutes:r.hour===e?60-r.minute:s.hour===e?s.minute:60,t+Math.round(n)}),0)),t.push({hour:e,minutes:60,tasksTimeInThisHour:Math.round(i)||0})},r=0;r<24;r++)n(r);return t},He={card:{display:"flex",flexDirection:"column"},taskName:{color:"#4823C2"},buttonContainer:{justifyContent:"flex-end"},button:{color:"#4823C2",background:"white"}};var Ke={saveCurrentTask:C},We=Object(w.b)((function(e){var t=e.tasksLog;return{tasksList:t.tasksList,task:t.task}}),Ke)(Object(Q.a)(He)((function(e){var t=e.tasksList,a=e.match,n=e.classes,s=t.find((function(e){return e.id===Number(a.params.id)}));if(!s)return r.a.createElement(J.a,{to:"/404"});var o=Fe(s);return r.a.createElement(V.a,{container:!0,alignItems:"center",direction:"column"},r.a.createElement(Me,{task:s,classes:n}),r.a.createElement(Re,{dataForChart:o}))})));var ze=function(){return r.a.createElement(z.a,null,r.a.createElement(J.d,null,r.a.createElement(J.b,{path:"/",exact:!0,render:function(){return r.a.createElement(J.a,{to:"/tasks"})}}),r.a.createElement(J.b,{path:"/tasks",exact:!0,component:Be}),r.a.createElement(J.b,{path:"/tasks/:id",exact:!0,component:We}),r.a.createElement(J.b,{path:"/chart",exact:!0,component:Be}),r.a.createElement(J.b,{component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=Object(m.a)(),Ve=Object(i.e)(x,Object(i.a)(Je));Je.run(W),o.a.render(r.a.createElement(w.a,{store:Ve},r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[237,1,2]]]);
//# sourceMappingURL=main.080fd20e.chunk.js.map