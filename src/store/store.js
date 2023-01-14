import create from "zustand";

const dummy = [
  {
    date: new Date(2022, 6, 10).getTime(), //number
    data: {
      account: [
        {
          type: "수입",
          price: 2100000,
          usage: "월급",
          memo: "신난다!",
          emotion: "good",
          pay: "계좌이체",
          index: 0,
        },
        {
          type: "지출",
          price: 2200000,
          usage: "플렉스",
          memo: "신난다!",
          emotion: "good",
          pay: "계좌이체",
          index: 1,
        },
        {
          type: "수입",
          price: 2300000,
          usage: "월급",
          memo: "신난다!",
          emotion: "good",
          pay: "계좌이체",
          index: 2,
        },
      ],
      diary: { title: "오늘의 일기", desc: "똥밟음" },
      schedule: [
        {
          title: "술약속",
          startAt: new Date(2022, 10, 1).getTime(),
          endAt: new Date(2022, 10, 5).getTime(),
          time: { hour: 18, minute: 0 },
          place: "집",
          expected: 50000,
          memo: "아 싫다",
        },
      ],
    },
  },
  {
    date: new Date(2022, 10, 10).getTime(), //number
    data: {
      account: [
        {
          type: "수입",
          price: 2100000,
          usage: "월급",
          memo: "신난다!",
          emotion: "good",
          pay: "계좌이체",
          index: 0,
        },
        {
          type: "지출",
          price: 2200000,
          usage: "플렉스",
          memo: "신난다!",
          emotion: "good",
          pay: "계좌이체",
          index: 1,
        },
        {
          type: "수입",
          price: 2300000,
          usage: "월급",
          memo: "신난다!",
          emotion: "good",
          pay: "계좌이체",
          index: 2,
        },
      ],
      diary: { title: "오늘의 일기", desc: "똥밟음" },
      schedule: [
        {
          title: "술약속",
          startAt: "2022-11-01",
          endAt: "2022-11-05",
          time: "18:00",
          place: "집",
          expected: 50000,
          memo: "아 싫다",
          index: 0,
        },
      ],
    },
  },
  {
    date: new Date(2022, 10, 5).getTime(), //number
    data: {
      account: [
        {
          type: "수입",
          price: 2100000,
          usage: "월급",
          memo: "신난다!",
          emotion: "good",
          pay: "계좌이체",
          index: 0,
        },
        {
          type: "수입",
          price: 2200000,
          usage: "월급",
          memo: "신난다!",
          emotion: "good",
          pay: "계좌이체",
          index: 1,
        },
        {
          type: "수입",
          price: 2300000,
          usage: "월급",
          memo: "신난다!",
          emotion: "good",
          pay: "계좌이체",
          index: 2,
        },
      ],
      diary: { title: "오늘의 일기", desc: "똥밟음" },
      schedule: [
        {
          title: "술약속",
          startAt: "2022-11-01",
          endAt: "2022-11-05",
          time: "18:00",
          place: "집",
          expected: 50000,
          memo: "아 싫다",
          index: 0,
        },
      ],
    },
  },
];

export const col = [
  "#E3E3E3",
  "#BF9A75",
  "#D1E5DD",
  "#F7A257",
  "#F8D8D8",
  "#E8BB4D",
  "#FBE8E8",
  "#BF9A75",
  "#D1E5DD",
  "#E3CCB6",
  "#EFEFEF",
  "#F7A257",
  "#fff",
];

export const useData = create((set, get) => ({
  data: [...dummy], // 상태 변수 더미데이터로 초기화
  currentDataIndex: null,
  currentColorIndex: 12,
  startMonth: new Date().getTime(),
  endMonth: new Date().getTime(),

  setMonth: (start, end) => set(() => ({ startMonth: start, endMonth: end })),
  setColorIndex: (index) =>
    set(() => (console.log(index), { currentColorIndex: index })),
  setCurrentDataIndex: (index) =>
    set((state) => ({ ...state, currentDataIndex: index })),

  deleteAcc: (index) => {
    const state = get().data;
    const currentIndex = get().currentDataIndex;
    if (currentIndex !== null) {
      state[currentIndex].data.account.splice(index, 1);
      state[currentIndex].data.account.forEach((d, i) => {
        d.index = i;
      });
      set(() => ({ data: state }));
    }
  },
  addAcc: (typing, date) => {
    const state = get().data;
    const currentIndex = get().currentDataIndex;
    if (currentIndex !== null) {
      state[currentIndex].data.account.push({
        ...typing,
        index: state[currentIndex].data.account.length,
      });
    } else {
      state.push({
        date: Number(date),
        data: {
          account: [{ ...typing, index: 0 }],
          diary: { title: null, desc: null },
          schedule: [],
        },
      });
      console.log(state);
    }
    set(() => ({ data: state }));
  },
  modifyAcc: (data) => {
    const state = get().data;
    const currentIndex = get().currentDataIndex;
    if (currentIndex !== null) {
      state[currentIndex].data.account[data.index] = data;
      //console.log(data)
      // console.log(state);
      set(() => ({ data: state }));
    }
  },
  registDiary: (data, date) => {
    const state = get().data;
    const currentIndex = get().currentDataIndex;
    if (currentIndex !== null) {
      state[currentIndex].data.diary = { ...data };
    } else {
      state.push({
        date: Number(date),
        data: {
          account: [],
          diary: { ...data },
          schedule: [],
        },
      });
    }
    set(() => ({ data: state }));
  },

  addSchedule: (typing, date) => {
    const state = get().data;
    const currentIndex = get().currentDataIndex;
    if (currentIndex !== null) {
      state[currentIndex].data.schedule.push({
        ...typing,
        index: state[currentIndex].data.schedule.length,
      });
    } else {
      state.push({
        date: Number(date),
        data: {
          account: [],
          diary: { title: null, desc: null },
          schedule: [{ ...typing }],
        },
      });
      console.log(state);
    }
    set(() => ({ data: state }));
  },
  modifySchedule: (data) => {
    const state = get().data;
    const currentIndex = get().currentDataIndex;
    console.log(currentIndex);
    if (currentIndex !== null) {
      console.log(data);
      state[currentIndex].data.schedule[data.index] = data;
      //console.log(data)
      // console.log(state);
      set(() => ({ data: state }));
    }
  },
  deleteSchedule: (index) => {
    const state = get().data;
    const currentIndex = get().currentDataIndex;
    if (currentIndex !== null) {
      state[currentIndex].data.schedule.splice(index, 1);
      state[currentIndex].data.schedule.forEach((d, i) => {
        d.index = i;
      });
      set(() => ({ data: state }));
    }
  },
}));
