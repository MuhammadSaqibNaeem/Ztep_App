/** @format */

import React, { useState, useEffect } from "react";
import { ViewStyle, TextStyle } from "react-native";
import DropDownPicker, {
  DropDownPickerProps,
} from "react-native-dropdown-picker";

type CustomDropDownPickerProps = {
  items: { label: string; value: string }[];
  width?: number;
  height?: number;
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  placeholder?: string;
  placeholderStyle?: TextStyle;
  dropDownMaxHeight?: number;
};

const CustomDropDownPicker: React.FC<
  CustomDropDownPickerProps & DropDownPickerProps
> = ({
  items,
  width,
  height,
  backgroundColor,
  containerStyle,
  placeholder,
  placeholderStyle,
  dropDownMaxHeight,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedPlaceholder, setSelectedPlaceholder] = useState(
    placeholder || items[0]?.label
  );

  useEffect(() => {
    if (!placeholder && items[0]?.label) {
      setSelectedPlaceholder(items[0]?.label);
    }
  }, [placeholder, items]);

  const customContainerStyle: ViewStyle = {
    borderColor: open ? "transparent" : "#ccc",
    ...(width && { width }),
    ...(height && { height }),
    ...(backgroundColor && { backgroundColor }),
    ...containerStyle,
  };

  const handleValueChange = (itemValue: string) => {
    setValue(itemValue);
    setOpen(false);
  };

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={handleValueChange}
      style={customContainerStyle}
      containerStyle={{ borderWidth: 0 }}
      placeholder={placeholder}
      dropDownContainerStyle={{ position: "absolute", top: height }}
      dropDownStyle={{ maxHeight: dropDownMaxHeight || 200 }}
      {...rest}
    >
      {/* <DropDownPicker.PlaceholderStyle style={placeholderStyle}>
        {selectedPlaceholder}
      </DropDownPicker.PlaceholderStyle> */}
    </DropDownPicker>
  );
};

export default CustomDropDownPicker;
