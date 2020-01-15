(this["webpackJsonptask-timer"]=this["webpackJsonptask-timer"]||[]).push([[0],{237:function(e,t,a){e.exports=a(429)},429:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),o=a.n(s),i=a(30),c=a(202),m=a(38),l=a(28),u="START_TASK",p="STOP_TASK",d="SET_TASK_NAME",h="PUSH_TASK_IN_TASKS_LIST",f="SET_TASKS_LIST_VALUE",b="DELETE_TASK",k="SYNC_TIMER_START_TIME",T="SYNC_STATE_FROM_STORAGE",O="SYNC_TASK_NAME",j=function(e){return{type:k,payload:e}},E=function(e){return{type:T,payload:e}},y=function(e){return{type:O,payload:e}},v={tasksList:[],taskProps:{id:null,taskName:null,timerStartTime:null,timerStopTime:null}};var S=a(43),g=a(29),I=a.n(g),N=a(34),C=I.a.mark(M),D=I.a.mark(A),x=I.a.mark(B),w=I.a.mark(_),L=I.a.mark(F),P=I.a.mark(R);function M(){var e;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.c)((function(e){return e.taskProps.timerStartTime}));case 2:return e=t.sent,t.next=5,localStorage.setItem("StartTime",e);case 5:case"end":return t.stop()}}),C)}function A(){var e;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.c)((function(e){return e.taskProps.taskName}));case 2:return e=t.sent,t.next=5,localStorage.setItem("TaskName",e);case 5:case"end":return t.stop()}}),D)}function B(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("StartTime");case 2:return e.next=4,localStorage.removeItem("TaskName");case 4:case"end":return e.stop()}}),x)}function _(){var e;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.c)((function(e){return e.tasksList}));case 2:return e=t.sent,t.next=5,localStorage.setItem("TasksList",JSON.stringify(e));case 5:case"end":return t.stop()}}),w)}function F(){var e,t,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=JSON.parse(localStorage.getItem("TasksList"))||[],t=localStorage.getItem("StartTime")||null,a=localStorage.getItem("TaskName")||null,n.next=5,Object(N.b)(j(t));case 5:return n.next=7,Object(N.b)(E(e));case 7:return n.next=9,Object(N.b)(y(a));case 9:case"end":return n.stop()}}),L)}function R(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)([F(),Object(N.d)(f,_),Object(N.d)(p,B),Object(N.d)(d,A),Object(N.d)(b,_),Object(N.d)(u,M),Object(N.d)(p,_)]);case 2:case"end":return e.stop()}}),P)}var H=a(37),K=a(54),z=a(17),V=a(14),J=a(18),W=a(19),Y=a(20),U=a(456),G=a(459),$=a(460),q=a(462),Q=a(461),X=a(463),Z=a(9),ee={container:{paddingTop:"10%","& h4":{color:"#00BCD3",paddingBottom:"1rem"}},buttonContainer:{display:"flex",justifyContent:"flex-end",paddingRight:"1rem",paddingBottom:".5rem","& span":{color:"#00BCD3"}}},te=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=e.container,a=e.buttonContainer;return r.a.createElement(U.a,{container:!0,className:t,justify:"center"},r.a.createElement(G.a,null,r.a.createElement($.a,null,r.a.createElement(Q.a,{variant:"h4"},"There is no such task :("),r.a.createElement(Q.a,{color:"textSecondary"},"Can try to find it on the home page?")),r.a.createElement(q.a,{className:a},r.a.createElement(X.a,{size:"small",component:H.b,to:"/tasks"},"Homepage"))))}}]),t}(n.PureComponent),ae=Object(Z.a)(ee)(te),ne=a(470),re=a(472),se=a(471),oe=a(11),ie=a(474),ce=a(464),me=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.verifyTaskName,a=e.setTaskName,n=e.startTimer,s=e.timerStartTime,o=e.taskName,i=e.time,c=e.classes,m=c.timerContainer,l=c.taskInput,u=c.timerFab,p=c.timerButton;return r.a.createElement("div",{className:m},r.a.createElement(ie.a,{label:"Name of your task",placeholder:"Name of your task",className:l,value:o||"",onChange:function(e){return a(e.target.value)}}),r.a.createElement(ce.a,{className:u},i),s?r.a.createElement(X.a,{variant:"contained",size:"small",className:p,onClick:t},"STOP"):r.a.createElement(X.a,{variant:"contained",size:"small",className:p,onClick:n},"START"))}}]),t}(n.PureComponent),le=a(473),ue={modalContainer:{display:"flex",alignItems:"center",justifyContent:"center"},modal:{display:"flex",flexDirection:"column",width:"60%",boxShadow:"1px 2px 5px black",backgroundColor:"#fff"},modalContent:{flexDirection:"column",padding:"1.5rem"},buttonContainer:{display:"flex",justifyContent:"flex-end",paddingRight:"1rem",paddingBottom:".5rem","& span":{color:"#00BCD3"}},alertName:{paddingBottom:"1rem",color:"#CA0045"},alertContent:{opacity:.7}},pe=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.changeModalVisibility,a=e.taskNameIsEmpty,n=e.classes,s=n.buttonContainer,o=n.modalContainer,i=n.modalContent,c=n.alertContent,m=n.alertName,l=n.modal;return r.a.createElement(le.a,{"aria-describedby":"simple-modal-description","aria-labelledby":"simple-modal-title",className:o,open:a},r.a.createElement("div",{className:l},r.a.createElement(U.a,{container:!0,className:i},r.a.createElement(Q.a,{variant:"h6",id:"modal-title",className:m},"Empty task name"),r.a.createElement(Q.a,{id:"simple-modal-description",className:c,variant:"subtitle1"},"You are trying close your task without name, enter the title and try again!")),r.a.createElement("div",{className:s},r.a.createElement(X.a,{onClick:function(){t()}},"Close"))))}}]),t}(n.PureComponent),de=Object(Z.a)(ue)(pe),he={timerContainer:{display:"flex",alignItems:"center",flexDirection:"column"},taskInput:{"& $input::placeholder":{color:"#4823C2",textAlign:"center",opacity:1}},timerFab:{width:"10rem",height:"10rem",margin:"1.5rem",background:"white",color:"#4823C2",fontSize:"1.5rem"},timerButton:{color:"#4823C2",background:"white",marginBottom:"1.5rem"}},fe=function(e){function t(){var e;return Object(z.a)(this,t),(e=Object(J.a)(this,Object(W.a)(t).call(this))).intervalID=0,e.timer=function(){e.setState({time:oe.Interval.fromDateTimes(oe.DateTime.fromISO(e.props.taskProps.timerStartTime),oe.DateTime.local()).toDuration().toFormat("hh:mm:ss")})},e.startTimer=function(){e.intervalID=setInterval(e.timer,1e3),e.props.startTask(oe.DateTime.local().toISO())},e.stopTimer=function(){var t=e.props,a=t.taskProps,n=t.stopTask,r=t.pushTaskInTasksList;e.setState({time:"00:00:00"}),clearInterval(e.intervalID),r(Object(l.a)({},a,{id:e.createTaskId(),timerStopTime:oe.DateTime.local().toISO()})),n()},e.createTaskId=function(){var t=e.props.tasksList,a=Math.max.apply(Math,Object(m.a)(t.map((function(e){return e.id}))));return a>0?a+1:1},e.verifyTaskName=function(){e.props.taskProps.taskName?e.stopTimer():e.changeModalVisibility()},e.changeModalVisibility=function(){e.setState((function(e){return{taskNameIsEmpty:!e.taskNameIsEmpty}}))},e.state={time:"00:00:00",taskNameIsEmpty:!1},e}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"componentDidMount",value:function(){this.props.taskProps.timerStartTime&&(this.timer(),this.intervalID=setInterval(this.timer,1e3)),console.log("2")}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=this.props,t=e.taskProps,a=t.timerStartTime,n=t.taskName,s=e.setTaskName,o=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{changeModalVisibility:this.changeModalVisibility,taskNameIsEmpty:this.state.taskNameIsEmpty,verifyTaskName:this.verifyTaskName,startTimer:this.startTimer,setTaskName:s,timerStartTime:a,time:this.state.time,taskName:n,classes:o}),r.a.createElement(de,{changeModalVisibility:this.changeModalVisibility,taskNameIsEmpty:this.state.taskNameIsEmpty}))}}]),t}(n.Component),be={pushTaskInTasksList:function(e){return{type:h,payload:e}},setTaskName:function(e){return{type:d,payload:e}},startTask:function(e){return{type:u,payload:e}},stopTask:function(){return{type:p}}},ke=Object(i.c)(Object(S.b)((function(e){var t=e.taskProps,a=e.tasksList;return{time:e.time,taskProps:t,tasksList:a}}),be),Object(Z.a)(he))(fe),Te=function(e){for(var t=[],a=function(a){var n=oe.DateTime.fromObject({hour:a,minute:0,second:0}),r=oe.DateTime.fromObject({hour:a,minute:59,second:59}),s=oe.Interval.fromDateTimes(n,r),o=e.filter((function(e){return s.intersection(oe.Interval.fromDateTimes(oe.DateTime.fromISO(e.timerStartTime),oe.DateTime.fromISO(e.timerStopTime)))})),i=void 0;o&&(i=o.reduce((function(e,t){var n,r=oe.DateTime.fromISO(t.timerStartTime),s=oe.DateTime.fromISO(t.timerStopTime);return n=r.hour===a&&s.hour===a?oe.Interval.fromDateTimes(r,s).toDuration("minutes").toObject().minutes:r.hour===a?60-r.minute:s.hour===a?s.minute:60,e+Math.round(n)}),0)),t.push({hour:a,minutes:60,tasksTimeInThisHour:i||0})},n=0;n<24;n++)a(n);return t},Oe=a(23),je=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.getRandomTasks,a=e.chartData,n=e.classes,s=n.generateButtonContainer,o=n.generateButton;return r.a.createElement("div",null,r.a.createElement(Oe.e,{id:"container",width:"100%",height:300},r.a.createElement(Oe.b,{data:a,margin:{top:20,left:-25}},r.a.createElement(Oe.c,{strokeDasharray:"3 3"}),r.a.createElement(Oe.g,{dataKey:"hour"}),r.a.createElement(Oe.h,{dataKey:"minutes"}),r.a.createElement(Oe.f,null),r.a.createElement(Oe.d,null),r.a.createElement(Oe.a,{dataKey:"tasksTimeInThisHour",name:"Minutes in this hours",barSize:20,fill:"#4823C2"}))),r.a.createElement(U.a,{container:!0,className:s},r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(X.a,{className:o,variant:"contained",size:"small",onClick:function(){return t()}},"Generate"))))}}]),t}(n.PureComponent),Ee={generateButtonContainer:{justifyContent:"justify-end",textAlign:"right",padding:"1rem 0"},generateButton:{color:"#4823C2",background:"white"}},ye=function(e,t){return Math.floor(Math.random()*(t-e)+e+1)},ve=function(e){function t(){var e,a;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(J.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(r)))).getRandomTasks=function(){for(var e=[],t=oe.DateTime.fromObject({hour:0,minute:0,second:0}),n=null,r=ye(10,16),s=1;s<r;s++)n=(t=t.plus({seconds:ye(0,5400)})).plus({seconds:ye(600,5400)}),e.push({id:s,taskName:"Random task #".concat(s),timerStartTime:t,timerStopTime:n}),t=n;a.props.setTasksListValue(e)},a}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tasksList,a=e.classes,n=Te(t);return r.a.createElement(je,{getRandomTasks:this.getRandomTasks,chartData:n,classes:a})}}]),t}(n.Component),Se={setTasksListValue:function(e){return{type:f,payload:e}}},ge=Object(i.c)(Object(S.b)((function(e){return{tasksList:e.tasksList}}),Se),Object(Z.a)(Ee))(ve),Ie=a(465),Ne=a(469),Ce=a(468),De=a(466),xe=a(467),we=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.deleteTask,a=e.tasksList,n=e.classes,s=n.tableRow,o=n.noTasks,i=n.tasksButton;return r.a.createElement(Ie.a,null,r.a.createElement(De.a,null,r.a.createElement(xe.a,null,r.a.createElement(Ce.a,null,"\u2116"),r.a.createElement(Ce.a,null,"Task"),r.a.createElement(Ce.a,null,"Time start"),r.a.createElement(Ce.a,null,"Time end"),r.a.createElement(Ce.a,null,"Time spend"),r.a.createElement(Ce.a,null,"Info"),r.a.createElement(Ce.a,null,"Delete"))),r.a.createElement(Ne.a,null,a.length>0?a.map((function(e){return r.a.createElement(xe.a,{key:e.id,className:s},r.a.createElement(Ce.a,{component:"th",scope:"row"},e.id),r.a.createElement(Ce.a,null,e.taskName),r.a.createElement(Ce.a,null,oe.DateTime.fromISO(e.timerStartTime).toFormat("HH:mm:ss")),r.a.createElement(Ce.a,null,oe.DateTime.fromISO(e.timerStopTime).toFormat("HH:mm:ss")),r.a.createElement(Ce.a,null,oe.Interval.fromDateTimes(oe.DateTime.fromISO(e.timerStartTime),oe.DateTime.fromISO(e.timerStopTime)).toDuration().toFormat("hh:mm:ss")),r.a.createElement(Ce.a,null,r.a.createElement(X.a,{className:i,variant:"contained",size:"small",component:H.b,to:"/tasks/".concat(e.id)},"Info")),r.a.createElement(Ce.a,null,r.a.createElement(X.a,{className:i,variant:"contained",size:"small",onClick:function(){return t(e.id)}},"Delete")))})):r.a.createElement(xe.a,{className:s},r.a.createElement(Ce.a,{className:o,colSpan:7},"No tasks to show"))))}}]),t}(n.PureComponent),Le={tableRow:{background:"#E8F6FF",color:"#4823C2"},noTasks:{textAlign:"center"},tasksButton:{color:"#4823C2",background:"white"}},Pe=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.deleteTask,a=e.tasksList,n=e.classes;return r.a.createElement(we,{deleteTask:t,tasksList:a,classes:n})}}]),t}(n.Component),Me={deleteTask:function(e){return{type:b,payload:e}}},Ae=Object(i.c)(Object(S.b)((function(e){return{tasksList:e.tasksList}}),Me),Object(Z.a)(Le))(Pe),Be={tasksTimerContainer:{padding:"2rem"},tabsContainer:{background:"#00BCD3",boxShadow:"none"}},_e=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.classes,n=a.tasksTimerContainer,s=a.tabsContainer,o="/tasks-timer/chart"===t.pathname?"Chart":"Log";return r.a.createElement("div",{className:n},r.a.createElement(U.a,{container:!0,justify:"center"},r.a.createElement(U.a,{item:!0,xs:12,lg:10},r.a.createElement(ke,null)),r.a.createElement(U.a,{item:!0,xs:12,lg:10},r.a.createElement("section",null,r.a.createElement(ne.a,{position:"relative",className:s},r.a.createElement(re.a,{variant:"fullWidth",value:o},r.a.createElement(se.a,{value:"Log",label:"Tasks log",component:H.b,to:"/tasks"}),r.a.createElement(se.a,{value:"Chart",label:"Tasks chart",component:H.b,to:"/chart"}))),r.a.createElement(K.b,{path:"/tasks",exact:!0,component:Ae}),r.a.createElement(K.b,{path:"/chart",exact:!0,component:ge})))))}}]),t}(n.PureComponent),Fe=Object(Z.a)(Be)(_e),Re=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.classes,n=a.card,s=a.taskName,o=a.buttonContainer,i=a.button;return r.a.createElement(G.a,{key:t.id,className:n},r.a.createElement($.a,null,r.a.createElement(Q.a,{className:s,variant:"h4",component:"h2"},"Task name: ".concat(t.taskName)),r.a.createElement(Q.a,{component:"p"},oe.DateTime.fromISO(t.timerStartTime).toFormat("'The timer was started on' yyyy-MM-dd 'at' HH:mm:ss")),r.a.createElement(Q.a,{component:"p"},oe.DateTime.fromISO(t.timerStopTime).toFormat("'The timer was stopped on' yyyy-MM-dd 'at' HH:mm:ss")),r.a.createElement(Q.a,{component:"p"},oe.Interval.fromDateTimes(oe.DateTime.fromISO(t.timerStartTime),oe.DateTime.fromISO(t.timerStopTime)).toDuration().toFormat("'Time spent on task:' hh:mm:ss"))),r.a.createElement(q.a,{className:o},r.a.createElement(X.a,{className:i,size:"small",component:H.b,to:"/tasks"},"Back")))}}]),t}(n.PureComponent),He=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe.e,{id:"container",width:"80%",height:300},r.a.createElement(Oe.b,{data:this.props.dataForChart,margin:{top:20}},r.a.createElement(Oe.c,{strokeDasharray:"3 3"}),r.a.createElement(Oe.g,{dataKey:"hour"}),r.a.createElement(Oe.h,{dataKey:"minutes"}),r.a.createElement(Oe.f,null),r.a.createElement(Oe.d,null),r.a.createElement(Oe.a,{dataKey:"tasksTimeInThisHour",name:"Minutes in this hours",barSize:20,fill:"#4823C2"})))}}]),t}(n.PureComponent),Ke=function(e){for(var t=[],a=[{startTime:function(){var t=oe.DateTime.fromISO(e.timerStartTime);return{hour:t.hour,minute:t.minute,second:t.second}}(),stopTime:function(){var t=oe.DateTime.fromISO(e.timerStopTime);return{hour:t.hour,minute:t.minute,second:t.second}}()}],n=function(e){var n=oe.DateTime.fromObject({hour:e,minute:0,second:0}),r=oe.DateTime.fromObject({hour:e,minute:59,second:59}),s=oe.Interval.fromDateTimes(n,r),o=a.filter((function(e){return s.intersection(oe.Interval.fromDateTimes(oe.DateTime.fromObject(e.startTime),oe.DateTime.fromObject(e.stopTime)))})),i=void 0;o&&(i=o.reduce((function(t,a){var n,r=oe.DateTime.fromObject(a.startTime),s=oe.DateTime.fromObject(a.stopTime);return n=r.hour===e&&s.hour===e?oe.Interval.fromDateTimes(r,s).toDuration("minutes").toObject().minutes:r.hour===e?60-r.minute:s.hour===e?s.minute:60,t+Math.round(n)}),0)),t.push({hour:e,minutes:60,tasksTimeInThisHour:Math.round(i)||0})},r=0;r<24;r++)n(r);return t},ze={card:{display:"flex",flexDirection:"column"},taskName:{color:"#4823C2"},buttonContainer:{justifyContent:"flex-end"},button:{color:"#4823C2",background:"white"}},Ve=function(e){function t(){return Object(z.a)(this,t),Object(J.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tasksList,a=e.match,n=e.classes,s=t.find((function(e){return e.id===Number(a.params.id)}));return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(U.a,{container:!0,alignItems:"center",direction:"column"},r.a.createElement(Re,{task:s,classes:n}),r.a.createElement(He,{dataForChart:Ke(s)})):r.a.createElement(K.a,{to:"/404"}))}}]),t}(n.Component),Je=Object(i.c)(Object(S.b)((function(e){return{tasksList:e.tasksList}})),Object(Z.a)(ze))(Ve);var We=function(){return r.a.createElement(H.a,{basename:"/tasks-timer"},r.a.createElement(K.d,null,r.a.createElement(K.b,{path:"/",exact:!0,render:function(){return r.a.createElement(K.a,{to:"/tasks"})}}),r.a.createElement(K.b,{path:"/tasks",exact:!0,component:Fe}),r.a.createElement(K.b,{path:"/tasks/:id",exact:!0,component:Je}),r.a.createElement(K.b,{path:"/chart",exact:!0,component:Fe}),r.a.createElement(K.b,{component:ae})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=Object(c.a)(),Ue=Object(i.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)({},e,{taskProps:Object(l.a)({},e.taskProps,{timerStopTime:null,timerStartTime:t.payload})});case p:return Object(l.a)({},e,{taskProps:v.taskProps});case d:return Object(l.a)({},e,{taskProps:Object(l.a)({},e.taskProps,{taskName:t.payload})});case h:return Object(l.a)({},e,{tasksList:[].concat(Object(m.a)(e.tasksList),[t.payload])});case f:return Object(l.a)({},e,{tasksList:t.payload});case b:return Object(l.a)({},e,{tasksList:e.tasksList.filter((function(e){return e.id!==t.payload}))});case k:return Object(l.a)({},e,{taskProps:Object(l.a)({},e.taskProps,{timerStartTime:t.payload})});case T:return Object(l.a)({},e,{tasksList:[].concat(Object(m.a)(e.tasksList),Object(m.a)(t.payload))});case O:return Object(l.a)({},e,{taskProps:Object(l.a)({},e.taskProps,{taskName:t.payload})});default:return e}}),Object(i.a)(Ye));Ye.run(R),o.a.render(r.a.createElement(S.a,{store:Ue},r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[237,1,2]]]);
//# sourceMappingURL=main.22b776e0.chunk.js.map