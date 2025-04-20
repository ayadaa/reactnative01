import { Text, View } from "react-native";
import { useState } from "react";

const [btn, setBtn] = useState<any>('0')

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Ayad Al-hussaini</Text>
      <input onChange={(e) => {setBtn(e.target.value as string)}}/>
      {/* <button onClick={() => alert('I am button')}>sing in</button> */}
      <button onClick={() => alert(btn as string)}>show a message</button>
    </View>
  );
}
