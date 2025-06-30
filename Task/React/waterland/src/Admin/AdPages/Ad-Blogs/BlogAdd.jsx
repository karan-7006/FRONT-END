import React, { useState } from 'react'
import AdHeader from '../../AdCommon/AdHeader'
import AdNavHeader from '../../AdCommon/AdNavHeader'
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';

function BlogAdd() {

  const redirect = useNavigate();

  const [form, setform] = useState({
    id: "",
    badge: "",
    img: "",
    date: "",
    title: "",
    description: ""
  });

  // Form Handling

  const getchange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    })
    console.log(form);
  };

  const submit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/blog", form)
    console.log(res.data);
    redirect("/BlogManage")

    setform({
      id: "",
      badge: "",
      img: "",
      date: "",
      title: "",
      description: ""
    })
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Add Blogs" subtitle="Blogs" />

      <div className='container py-5'>
        <div className="p-5 rounded" style={{ backgroundImage: "url('https://images.pexels.com/photos/4253060/pexels-photo-4253060.jpeg')", backgroundRepeat: "no-repeat", objectFit: "cover", backgroundSize: "100% 100%" }}>
          <h1 className="mb-4 text-center fw-bold mb-4" style={{ color: "darkslateblue" }}><u>Add Your Blog</u></h1>
          <form onSubmit={submit}>
            <div className="row g-4">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="text" name='badge' value={form.badge} onChange={getchange} className="form-control" id="badge" placeholder="Your Badge" style={{ color: "darkslateblue" }} />
                  <label htmlFor="name">Your Badge</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input type="date" name='date' value={form.date} onChange={getchange} className="form-control" id="date" placeholder="Your title" style={{ color: "darkslateblue" }} />
                  <label htmlFor="name">Your Date</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" name='title' value={form.title} onChange={getchange} className="form-control" id="name" placeholder="Your title" style={{ color: "darkslateblue" }} />
                  <label htmlFor="name">Your title</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="url" name='img' value={form.img} onChange={getchange} className="form-control" id="image" placeholder="your Images url" style={{ color: "darkslateblue" }} />
                  <label htmlFor="image">your Images url</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" name='description' onChange={getchange} value={form.description} placeholder="Leave a message here Desc" id="message" style={{ height: 160, color: "darkslateblue" }} defaultValue={""} />
                  <label htmlFor="message">Description</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-light fw-bold w-100 py-3" style={{ color: "darkslateblue", fontSize: "20px" }}>Add Your Blog</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BlogAdd
