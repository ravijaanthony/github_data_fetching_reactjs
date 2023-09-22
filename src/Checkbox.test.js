import { Checkbox } from "./Checkbox";
import { fireEvent, render ,screen} from "@testing-library/react";


test("Selecting the checkbox", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = screen.getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});
