let initState = {
  Conversations: [
    {
      name: "Hamza",
      image:
        "https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/47482767_2049823101782011_378499975849443328_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEeVtkDElDLEpNqVNGg49aa3OYJvYguTHLc5gm9iC5Mctc4iH6nAwJUMI4jXVVLYMFcrdGpBlIVEwuh7Uhsirui&_nc_ohc=zeq9lKBB6UsAX-s15S6&_nc_ht=scontent.flhe3-1.fna&oh=d1fc8372766af6e7c324603a4e669937&oe=5FA962D8",
      Messages: "3",
      isActive: true,
    },
    {
      name: "Ahsan",
      image:
        "https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/47482767_2049823101782011_378499975849443328_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEeVtkDElDLEpNqVNGg49aa3OYJvYguTHLc5gm9iC5Mctc4iH6nAwJUMI4jXVVLYMFcrdGpBlIVEwuh7Uhsirui&_nc_ohc=zeq9lKBB6UsAX-s15S6&_nc_ht=scontent.flhe3-1.fna&oh=d1fc8372766af6e7c324603a4e669937&oe=5FA962D8",
      Messages: "0",
      isActive: false,
    },
  ],
};

const updateChatReducer = (state = initState, action) => {
  if (action.type == "SelectReceiver") {
    if (!action.user.isActive) {
      let updateConversation = state.Conversations.map((item) => {
        item.isActive = false;
        return item;
      });
      action.user.isActive = true;
      return {
        ...state,
        Conversations: updateConversation,
      };
    }
  }
  return state;
};

export default updateChatReducer;
