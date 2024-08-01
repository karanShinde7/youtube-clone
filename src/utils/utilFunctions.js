import { ICON_SET } from "./url";

export const formatNumber = (number) => {
  let unitlist = ["", "K", "M", "G"];
  let sign = Math.sign(number);
  let unit = 0;

  while (Math.abs(number) >= 1000) {
    unit = unit + 1;
    number = Math.floor(Math.abs(number) / 100) / 10;
  }
  return sign * Math.abs(number) + unitlist[unit];
};

export const getComments = () => {
  return [
    {
      key: "1",
      name: "Arjun Sharma",
      img: ICON_SET.USER_ICON_URL,
      comment: "Great content!",
      replies: [
        {
          key: "1.1",
          name: "Alice Johnson",
          img: ICON_SET.USER_ICON_URL,
          comment: "I totally agree!",
          replies: [
            {
              key: "1.1",
              name: "Alice Johnson",
              img: ICON_SET.USER_ICON_URL,
              comment: "I totally agree!",
              replies: [
                {
                  key: "1.1",
                  name: "Alice Johnson",
                  img: ICON_SET.USER_ICON_URL,
                  comment: "I totally agree!",
                  replies: [
                    {
                      key: "1.1",
                      name: "Alice Johnson",
                      img: ICON_SET.USER_ICON_URL,
                      comment: "I totally agree!",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: "2",
      name: "Priya Gupta",
      img: ICON_SET.USER_ICON_URL,
      comment: "Very informative, thanks!",
      replies: [
        {
          key: "2.1",
          name: "Bob Smith",
          img: ICON_SET.USER_ICON_URL,
          comment: "Well said!",
        },
      ],
    },
    {
      key: "3",
      name: "Ravi Kumar",
      img: ICON_SET.USER_ICON_URL,
      comment: "Loved this video!",
      replies: [
        {
          key: "3.1",
          name: "Charlie Brown",
          img: ICON_SET.USER_ICON_URL,
          comment: "Exactly my thoughts.",
        },
      ],
    },
    {
      key: "4",
      name: "Anjali Mehta",
      img: ICON_SET.USER_ICON_URL,
      comment: "Super helpful!",
      replies: [
        {
          key: "4.1",
          name: "David Wilson",
          img: ICON_SET.USER_ICON_URL,
          comment: "Couldn't agree more.",
        },
      ],
    },
    {
      key: "5",
      name: "Vikram Singh",
      img: ICON_SET.USER_ICON_URL,
      comment: "Amazing tutorial!",
      replies: [
        {
          key: "5.1",
          name: "Eva Green",
          img: ICON_SET.USER_ICON_URL,
          comment: "Absolutely true!",
        },
      ],
    },
    {
      key: "6",
      name: "Neha Patel",
      img: ICON_SET.USER_ICON_URL,
      comment: "Thanks for sharing!",
      replies: [
        {
          key: "6.1",
          name: "Frank White",
          img: ICON_SET.USER_ICON_URL,
          comment: "Spot on!",
        },
      ],
    },
    {
      key: "7",
      name: "Rajesh Reddy",
      img: ICON_SET.USER_ICON_URL,
      comment: "Really appreciate this!",
      replies: [
        {
          key: "7.1",
          name: "Grace Kelly",
          img: ICON_SET.USER_ICON_URL,
          comment: "Well articulated!",
        },
      ],
    },
    {
      key: "8",
      name: "Aditi Joshi",
      img: ICON_SET.USER_ICON_URL,
      comment: "Awesome explanation!",
      replies: [
        {
          key: "8.1",
          name: "Henry Ford",
          img: ICON_SET.USER_ICON_URL,
          comment: "I agree completely.",
        },
      ],
    },
    {
      key: "9",
      name: "Manish Verma",
      img: ICON_SET.USER_ICON_URL,
      comment: "This was so useful!",
      replies: [
        {
          key: "9.1",
          name: "Isla Fisher",
          img: ICON_SET.USER_ICON_URL,
          comment: "Very true.",
        },
      ],
    },
    {
      key: "10",
      name: "Pooja Chawla",
      img: ICON_SET.USER_ICON_URL,
      comment: "Clear and concise, thanks!",
      replies: [
        {
          key: "10.1",
          name: "Jack Sparrow",
          img: ICON_SET.USER_ICON_URL,
          comment: "Exactly right.",
        },
      ],
    },
  ];
};
