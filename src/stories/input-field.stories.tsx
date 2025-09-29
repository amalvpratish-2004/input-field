import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { InputField, type InputFieldProps } from "../components/input-field";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    type: {
      control: { type: "select" },
      options: ["text", "password"],
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

const Controlled = (args: InputFieldProps) => {
  const [val, setVal] = useState("");

  return (
    <motion.div
      className="max-w-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <InputField
        {...args}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </motion.div>
  );
};

// Basic States
export const Default: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
  },
};

export const Password: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    clearable: true,
  },
};

export const ErrorState: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Disabled field",
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="bg-gray-900 p-6 rounded-lg">
      <Controlled {...args} />
    </div>
  ),
  args: {
    label: "Dark Mode",
    placeholder: "Enter text",
    variant: "filled",
    dark: true,
    clearable: true,
  },
};

// Size Variants
export const SmallSize: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Small Input",
    placeholder: "Compact size",
    size: "sm",
    helperText: "Perfect for tight spaces",
  },
};

export const LargeSize: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Large Input",
    placeholder: "Easy to read and tap",
    size: "lg",
    helperText: "Great for accessibility",
  },
};

// Variant Showcases
export const FilledVariant: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Filled Variant",
    placeholder: "With background fill",
    variant: "filled",
    helperText: "Subtle background color",
  },
};

export const GhostVariant: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Ghost Variant",
    placeholder: "Minimal appearance",
    variant: "ghost",
    helperText: "Only bottom border visible",
  },
};

// Feature Combinations
export const ClearableWithHelper: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Clearable with Helper",
    placeholder: "Type something...",
    clearable: true,
    helperText: "You can clear this field easily",
  },
};

export const PasswordWithClear: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    label: "Password with Clear",
    placeholder: "Enter secure password",
    type: "password",
    clearable: true,
    helperText: "Toggle visibility and clear text",
  },
};