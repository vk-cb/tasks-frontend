export const handleChange = <T,>(
    state: T,
    setState: React.Dispatch<React.SetStateAction<T>>,
    key: keyof T,
    value: string
  ) => {
    setState({
      ...state,
      [key]: value,
    });
  };