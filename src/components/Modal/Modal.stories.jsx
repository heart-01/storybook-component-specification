import { useState } from "react";
import Modal from "./Modal";
import { userEvent, within, waitFor, expect } from "@storybook/test";

export default {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
  args: {
    children: <p>Modal Content</p>,
  },
};

export const ClosedModal = {
  args: {
    isOpen: false,
    // children: <p>Modal Content</p>,
  },
};

export const OpenModal = {
  args: {
    isOpen: true,
    // children: <p>Modal Content</p>,
  },
};

export const InteractionTest = {
  args: {
    isOpen: false,
    // children: <p>Modal Content</p>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByText("Open Modal");
    userEvent.click(openButton);

    await waitFor(() => {
      expect(canvas.getByText(/Modal Content/i)).toBeInTheDocument();
    });

    const closeButton = canvas.getByLabelText("Close");
    userEvent.click(closeButton);

    await waitFor(() => {
      expect(canvas.queryByText(/Modal Content/i)).not.toBeInTheDocument();
    });
  },
};
