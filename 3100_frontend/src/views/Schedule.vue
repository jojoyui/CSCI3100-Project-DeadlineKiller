<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container shape-container d-flex align-items-center">
                <div class="col px-0">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-7 text-center pt-lg">
                            <img src="img/brand/test.png" style="width: 300px;" class="img-fluid">
                            <p class="lead text-white mt-4 mb-5"></p>
                            <div class="btn-wrapper">
                                <base-button tag="a"
                                            href="http://localhost:8080/#/list"
                                            class="mb-3 mb-sm-0"
                                            type="white"
                                            icon="ni ni-bullet-list-67">
                                    Task List
                                </base-button>
                                
                                <base-button tag="a"
                                            href="http://localhost:8080/#/schedule"
                                            class="mb-3 mb-sm-0"
                                            type="primary"
                                            icon="ni ni-calendar-grid-58">
                                    Schedule
                                </base-button>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-around stars-and-coded">
                        <div class="row">
                            <div class="col">
                                <!-- <base-button tag="a"
                                                href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                                class="mb-3 mb-sm-0"
                                                type="info"
                                                icon="fa fa-code">
                                        Create Task
                                </base-button> -->
                            </div>
                            <div class="col">
                                <span></span>
                            </div>
                            <div class="col">
                                <span></span>
                            </div>
                            <div class="col">
                                <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                                    <!-- <base-button tag="a"
                                                href="https://www.creative-tim.com/product/vue-argon-design-system"
                                                class="mb-3 mb-sm-0"
                                                type="white"
                                                icon="ni ni-cloud-download-95">
                                        schedule
                                    </base-button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>

                    <div class="todo-wrap">
                        <div class="caption">
                        <span class="item" @click="handleToggleMonth('prev')">
                            <i class="prev"></i>
                        </span>
                        <time class="time">{{curYearMonth}}</time>
                        <span class="item" @click="handleToggleMonth('next')">
                            <i class="next"></i>
                        </span>
                        </div>
                        <div class="container">
                        <ul class="week list-unstyled">
                            <li class="item" v-for="(item, index) in _week" :key="index">{{item}}</li>
                        </ul>
                        <ul class="data clear class list-unstyled">
                            <li class="item invalid" v-for="(item, index) in startDay" :key="index - startDay">
                            <span class="lunar" v-if="isLunar">{{handleLunar(prevYear, prevMonth, prevMonthDays + 1 + index - startDay)}}</span>
                            <span class="text">{{prevMonthDays + 1 + index - startDay}}</span>
                            </li>
                            <li class="item" v-for="(item, index) in curMonthDays" :key="index">
                            <span class="lunar" v-if="isLunar">{{handleLunar(curYear, curMonth, item.date)}}</span>
                            <span class="text" :class="{active: curDay == index + 1}">{{item.date}}</span>
                            <template v-for="(_item, _index) in item.todo">
                                <p class="todo" :class="{on: index == isItem.index && isIndex == _index}" :key="_index" @click="handleToggleTodo(item.todo[_index], index, _index, $event)" :title="_item.title" v-if="_index < 2">{{_item.title}}</p>
                            </template>
                            <div class="todo-item" :class="{left: isShowLeft, top: isShowTop}" v-if="index == isItem.index && isIndex == isItem._index" :style="posTop">
                                <h2 class="title">{{isItem.desc.caption}}</h2>
                                <div class="time">{{'时间：' + isItem.desc.time}}</div>
                                <div class="author-box">
                                <span class="author">{{'作者：' + isItem.desc.author}}</span>
                                </div>
                                <div class="link-box">
                                <a class="link" :href="isItem.desc.link">查看GitHub</a>
                                <span class="view">
                                    已查看
                                    <span class="strong">{{isItem.desc.num}}</span>
                                    次
                                </span>
                                </div>
                            </div>
                            </li>
                            <li class="item invalid" v-for="(item, index) in endDay" :key="curMonthDays + index + 1">
                            <span class="lunar" v-if="isLunar">{{handleLunar(nextYear, nextMonth, item)}}</span>
                            <span class="text">{{item}}</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    
                </card>
                
            </div>
        </section>
        <!-- <Fullcalendar :plugins="calendarPlugin" /> -->
    </div>
</template>
<script>
//  require('@fullcalendar/core/main.min.css')
//  require('@fullcalendar/daygrid/main.min.css')
//  require('@fullcalendar/timegrid/main.min.css')

import { service } from "@/plugins/request_service.js";
import store from "@/store";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import TabsSection from "./components/JavascriptComponents/TabsSection";
import calendar from '@/components/todo/js/calendar';

// import Fullcalendar from '@fullcalendar/vue'
// import DayGridPlugin from '@fullcalendar/vue'
// import TimeGridPlugin from '@fullcalendar/vue'
// import InteractionPlugin from '@fullcalendar/vue'
// import ListPlugin from '@fullcalendar/vue'

const todoObj = {
  title: '备忘录',
  desc: {
    caption: '我的github项目',
    time: '2018.02.27',
    author: 'shaw',
    num: 369,
    link: 'https://github.com/chilliness'
  }
};


export default {
    components: {
        TabPane,
        Tabs,
        TabsSection,
        
    },
    props: {
    isWest: {
      // 是否启用西方模式
      type: Boolean,
      default: true
    },
    isLunar: {
      // 是否开启农历
      type: Boolean,
      default: true
    }
    },
    data: () => ({
        temp: "original",
        task: "A",
        prevMonthDays: 0,
        curMonthDays: [],
        nextMonthDays: 0,
        curYearMonth: '',
        startDay: 0,
        endDay: 0,
        curDay: 0,
        posTop: null,
        isItem: {},
        isIndex: -1,
        isShowLeft: false,
        isShowTop: false,
        curYear: 0,
        curMonth: 0,
        prevYear: 0,
        prevMonth: 0,
        nextYear: 0,
        nextMonth: 0
        // calendarPlugins: [
        //     DayGridPlugin,
        //     TimeGridPlugin,
        //     InteractionPlugin,
        //    ListPlugin
        // ] 
    }),
    computed: {
        _week() {
        let arr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        if (this.isWest) {
            arr.unshift(arr.pop());
        }
        return arr;
        }
    },
    mounted (){
        this.fetchTask();
        let date = new Date();
        this.curDay = date.getDate();
        this.handleFormatDate(date.getFullYear(), date.getMonth() + 1);
    },
    methods: {
        demo(){
            console.log("clicked")
            service.get("/users/testing").then(res => {
                console.log(res.data.data[0].name);
                this.temp = res.data.data[0].name;
            })
            
        },
        handleLunar(year, month, date) {
            let { IMonthCn, IDayCn } = calendar.solar2lunar(year, month, date);
            return IMonthCn + IDayCn;
        },
        handleToggleTodo(item, index, _index, ev) {
            let parent = ev.target.parentNode.getBoundingClientRect();
            let top = ev.target.getBoundingClientRect().top - parent.top + 'px';
            let right = parent.right + 330;
            let bottom = ev.target.getBoundingClientRect().top + 213;
            let todoEl = document.querySelector('.container').getBoundingClientRect();
            // 判断显示层应该是在左边还是右边
            this.isShowLeft = right > todoEl.right;
            // 判断显示层应该是在下边还是上边
            this.isShowTop = bottom > todoEl.bottom;
            if (this.isShowTop) {
                bottom =
                parent.bottom - ev.target.getBoundingClientRect().bottom + 'px';
                this.posTop = { bottom };
            } else {
                this.posTop = { top };
            }
            if (this.isIndex === _index && this.isItem.index === index) {
                this.isIndex = -1;
            } else {
                this.isIndex = _index;
            }
            this.isItem = { ...item, index, _index };
            },
        handleFormatDate(year, month) {
            if (month > 12) {
                ++year;
                month = 1;
            } else if (month < 1) {
                --year;
                month = 12;
            }

            this.curYear = year;
            this.curMonth = month;

            let prevDate = new Date(year, month);
            this.prevYear = prevDate.getFullYear();
            this.prevMonth = prevDate.getMonth() - 1;

            if (this.prevMonth === 0) {
                --this.prevYear;
                this.prevMonth = 12;
            } else if (this.prevMonth === -1) {
                --this.prevYear;
                this.prevMonth = 11;
            }

            let nextDate = new Date(year, month);
            this.nextYear = nextDate.getFullYear();
            this.nextMonth = nextDate.getMonth() + 1;

            // 输出年月
            this.curYearMonth = `${year}年${String(month).padStart(2, '0')}月`;
            // 获取当前月总天数
            let allDays = this.handleMonthDays(year, month);
            this.curMonthDays = [];
            for (let i = 0; i < allDays; i++) {
                let item = { date: i + 1 };
                if (Math.random() > 0.5) {
                item.todo = [todoObj];
                if (Math.random() > 0.5) {
                    item.todo.push(todoObj);
                }
                }
                this.curMonthDays.push(item);
            }
            // 获取上月总天数
            this.prevMonthDays = this.handleMonthDays(year, month - 1);
            // 获取下月总天数
            this.nextMonthDays = this.handleMonthDays(year, month + 1);
            this.handleStartAndEndWeek(year, month, this.curMonthDays.length);
        },
        handleMonthDays(year, month) {
            return new Date(year, month, 0).getDate();
        },
        handleStartAndEndWeek(year, month, monthDays) {
            this.startDay = new Date(year, month - 1, 0).getDay();
            this.endDay =
                new Date(year, month, 0).getDay() &&
                7 - new Date(year, month, 0).getDay();
            if (this.isWest) {
                this.endDay = 7 - (new Date(year, month, 0).getDay() + 1);
                if (++this.startDay === 7) {
                this.startDay = 0;
                }
            }

            if (
                Math.ceil(monthDays / 7) < 6 &&
                Math.ceil((monthDays + this.startDay + this.endDay + 7) / 7) < 7
            ) {
                if (this.startDay === 0) {
                this.startDay += 7;
                } else {
                this.endDay += 7;
                }
            }
        },
        handleToggleMonth(str = 'next') {
            this.isIndex = -1;
            let [year, month] = this.curYearMonth.match(/\d+/g);
            str === 'next' ? ++month : --month;
            this.handleFormatDate(year, month);
        },
        fetchTask(){
            service.get(`/tasks/getTasks/${store.getters["getUserId"]}`).then(function(res){
                console.log(res.data.data);
            });
        }
    }


};
</script>
<style lang="scss" scoped>
.todo-wrap {
  font-size: 16px;
  min-width: 768px;
  max-width: 1024px;
  margin: 0 auto;
  .caption {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    color: #fff;
    background: #17b68d;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border: 1px solid #fff;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .prev,
    .next {
      position: relative;
      width: 12px;
      height: 12px;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
    }
    .prev {
      right: -3px;
      transform: rotate(-45deg);
    }
    .next {
      right: 3px;
      transform: rotate(135deg);
    }
    .time {
      padding: 0 25px;
    }
  }
  .container {
    font-size: 14px;
    .item {
      flex: 0 0 calc(100% / 7);
      width: calc(100% / 7);
      color: #6f6f6f;
      box-sizing: border-box;
    }
    .week {
      display: flex;
      align-items: center;
      border-left: 1px solid #e8ecef;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        color: #333;
        border-right: 1px solid #fff;
        background: #e8ecef;
        &:last-child {
          border-right: 0 none;
        }
      }
    }
    .data {
      border-left: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      .item {
        position: relative;
        float: left;
        border-top: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
        &:before {
          content: '';
          float: left;
          padding-top: 100%;
        }
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        &.invalid {
          color: #ccc;
        }
        .lunar {
          position: absolute;
          left: 10px;
          top: 10px;
          font-size: 12px;
        }
        .text {
          position: absolute;
          right: 10px;
          top: 10px;
        }
        .todo {
          line-height: 19px;
          margin: 6px 6px 0;
          padding: 5px 10px;
          font-size: 12px;
          color: #666;
          cursor: pointer;
          border-radius: 2px;
          background: #f2f2f2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:nth-of-type(1) {
            margin-top: 35px;
          }
          &.on {
            color: #0a7b5d;
            background: #c6ede3;
          }
        }
        .todo-item {
          position: absolute;
          left: 100%;
          top: 0;
          z-index: 9;
          width: 318px;
          height: 213px;
          padding: 22px 30px 26px;
          border: 1px solid #17b68c;
          transform: translateX(15px);
          background: #fff;
          box-shadow: 0 2px 10px #ccc;
          box-sizing: border-box;
          &:before {
            content: '';
            position: absolute;
            left: -8px;
            top: 4px;
            width: 14px;
            height: 14px;
            border-left: 1px solid #17b68c;
            border-top: 1px solid #17b68c;
            transform: rotate(-45deg);
            background: #fff;
          }
          &.left {
            left: initial;
            right: 100%;
            transform: translateX(-15px);
            &:before {
              left: initial;
              right: -8px;
              transform: rotate(135deg);
            }
          }
          &.top {
            top: initial;
            &:before {
              top: initial;
              bottom: 4px;
            }
          }
          .title {
            font-size: 16px;
            color: #333;
          }
          .time {
            margin-top: 12px;
            font-size: 12px;
            color: #666;
          }
          .author-box {
            line-height: 24px;
            margin-top: 17px;
            font-size: 14px;
            color: #666;
          }
          .link-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 25px;
            padding-top: 25px;
            border-top: 1px dashed #bababa;
            .link {
              padding: 6px 16px;
              font-size: 16px;
              color: #fff;
              border-radius: 2px;
              background: #17b68c;
            }
            .view {
              font-size: 14px;
              color: #666;
            }
            .strong {
              font-weight: bold;
              color: #17b68c;
            }
          }
        }
      }
    }
  }
}
</style>


