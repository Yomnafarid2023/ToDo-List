import React from "react";
import { Image, SectionList, StyleSheet, Text, View } from "react-native";

const Contacts = () => {
  const contacts = [
    {
      id: "0",
      title: "A",
      data: [
        {
          id: "0",
          text: "Ali",
          image:
            "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
        },
        {
          id: "1",
          text: "Ahmed",
          image:
            "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        },
        {
          id: "2",
          text: "Amira",
          image:
            "https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
        },
      ],
    },
    {
      id: "1",
      title: "M",
      data: [
        {
          id: "0",
          text: "Mohamed",
          image:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          id: "1",
          text: "Mario",
          image:
            "https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid",
        },
        {
          id: "2",
          text: "Marwa",
          image:
            "https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg",
        },
        {
          id: "3",
          text: "Mariam",
          image:
            "https://img.freepik.com/premium-vector/girl-with-shirt-that-says-it_169196-12972.jpg",
        },
      ],
    },
    {
      id: "2",
      title: "Y",
      data: [
        {
          id: "0",
          text: "Yomna",
          image:
            "https://img.freepik.com/premium-vector/vector-flat-icon-woman-with-red-hair-pink-shirt_176841-6797.jpg",
        },
        {
          id: "1",
          text: "Yasser",
          image: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
        },
        {
          id: "2",
          text: "Yara",
          image:
            "https://img.freepik.com/premium-vector/vector-flat-icon-girl-with-red-hair-pink-shirt_176841-8302.jpg",
        },
      ],
    },
  ];
  return (
    <SectionList
      style={{ marginVertical: 50, marginHorizontal: 30 }}
      sections={contacts}
      renderItem={({ item }) => (
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 50, height: 50 }}
          />
          <Text style={ContactStyle.items}>{item.text}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={ContactStyle.header}>{title}</Text>
      )}
    ></SectionList>
  );
};

const ContactStyle = StyleSheet.create({
  header: {
    backgroundColor: "#5a189a",
    color: "white",
    padding: 15,
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
  },
  items: { padding: 15, marginBottom: 5, fontSize: 20 },
});

export default Contacts;
