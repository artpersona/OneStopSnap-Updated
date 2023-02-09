import React, { useRef } from "react";
import { FlatList } from "react-native";

export default function VirtualizedView(props) {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => "dummy"}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
      contentContainerStyle={{ backgroundColor: "white" }}
      ref={props?.scrollRef}
    />
  );
}
