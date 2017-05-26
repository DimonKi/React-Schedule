<template>
  <div>
    <input id="place-input" class="place-input" type="text" placeholder="введите свой адрес">
    <p id="place-output" class="place-output"></p>

    <div class="cd-schedule loading">
      <div class="timeline">
        <ul>
          <li><span>08:30</span></li>
          <li><span>09:00</span></li>
          <li><span>09:30</span></li>
          <li><span>10:00</span></li>
          <li><span>10:30</span></li>
          <li><span>11:00</span></li>
          <li><span>11:30</span></li>
          <li><span>12:00</span></li>
          <li><span>12:30</span></li>
          <li><span>13:00</span></li>
          <li><span>13:30</span></li>
          <li><span>14:00</span></li>
          <li><span>14:30</span></li>
          <li><span>15:00</span></li>
          <li><span>15:30</span></li>
          <li><span>16:00</span></li>
          <li><span>16:30</span></li>
          <li><span>17:00</span></li>
          <li><span>17:30</span></li>
          <li><span>18:00</span></li>
          <li><span>18:30</span></li>
          <li><span>19:00</span></li>
          <li><span>19:30</span></li>
          <li><span>20:00</span></li>
          <li><span>20:30</span></li>
          <li><span>21:00</span></li>
          <li><span>21:30</span></li>
        </ul>
      </div> <!-- .timeline -->

      <div class="event-modal">
        <header class="header">
          <div class="content">
            <span class="event-date"></span>
            <h3 class="event-name"></h3>
            <p class="event-text"><span id="remaining-time"></span></p>
            <p class="event-text">Расстояние: <span id="distance"></span></p>
            <p class="event-text">Время в пути: <span id="duration"></span></p>
          </div>

          <div class="header-bg"></div>
        </header>

        <div class="body">
          <div class="event-info"></div>
          <div class="body-bg"></div>
        </div>

        <a href="" class="close">Close</a>
      </div>
      <div class="events">
        <ul>
          <li class="events-group" v-for="item in schedule.data">
            <div class="top-info"><span>{{ item.name }}</span></div>
            <ul>
              <li v-for="lesson in item.lessons" class="single-event" :data-start="lesson.start" :data-end="lesson.end" :data-content="lesson.content"
                  :data-event="lesson.event" :data-university="lesson.coords">
                <a href=""><em class="event-name">{{ lesson.name }}</em></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="cover-layer"></div>
    </div>
  </div>
</template>
<script type="text/javascript">

import ScheduleController from '../controllers/Schedule.js';

export default {
  data() {
      return {
          schedule: ScheduleController
      }
  },
  methods: {
  },
  mounted: function () {
      this.$nextTick(function () {
          this.schedule.Initialize();
          console.log(this.schedule.data)
      })
  },
}
</script>