/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'App',
data() {
return {
duration: 0,
counting: false,
minutes: 0,
seconds: 0,
countdownComplete: false,
intervalid: null,
};
},
methods: {
startCountdown() {
if (this.duration > 0 && !this.counting) {
this.counting = true;
this.intervalid = setInterval(() => {
if (this.duration > 0) {
this.duration--;
this.calculateTime();
}
else {
clearInterval(This.intervalid);
this.counting = false;
this.countdownComplete = true;
}

}, 1000);
}
calculateTime(); {
this.minutes = Math.floor(this.duration / 60);
this.seconds = this.duration % 60;
}
}
}
});
