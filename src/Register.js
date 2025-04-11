import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", form);
    alert("ثبت‌نام با موفقیت انجام شد (فیک)");
  };

  return (
    <div>
      <h2>ثبت‌نام</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="نام کاربری"
          value={form.username}
          onChange={handleChange}
        /><br />
        <input
          name="email"
          placeholder="ایمیل"
          type="email"
          value={form.email}
          onChange={handleChange}
        /><br />
        <input
          name="password"
          placeholder="رمز عبور"
          type="password"
          value={form.password}
          onChange={handleChange}
        /><br />
        <button type="submit">ثبت‌نام</button>
      </form>
    </div>
  );
}
