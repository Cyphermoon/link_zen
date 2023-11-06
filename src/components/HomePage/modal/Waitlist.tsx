import Overlay from "@/components/common/Overlay";
import { waitlist } from "./type";
import { useFormik } from "formik";
import { createContact } from "@/service/mail";
import Btn from "@/components/common/Button";
import { CreateContactRequestProps } from "@/service/type";

const WaitListModal = ({ modalOpened, closeModal }: waitlist) => {
  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit(values, { resetForm }) {
      const requestData: CreateContactRequestProps = {
        email: values.email,
        updateEnabled: true,
        listIds: [3],
        attributes: {
          FIRSTNAME: values.name
        }
      }

      createContact(requestData)
        .then(data => {
          resetForm()
          location.assign("/waitlist-verified")
        })
        .catch(err => console.error(err))
    }
  })


  return (
    <div className={`fixed z-[200] top-0 left-0 ${modalOpened === false ? "animate-moveOut w-screen h-screen" : modalOpened === undefined ? "hidden" : "animate-in slide-in-from-right-full duration-1000 w-screen h-screen"}`}>
      <Overlay
        handleClick={closeModal}
        className={`bg-black opacity-50 blur-sm`}
      />

      <div
        className={`darker-gradient px-3 md:px-16 py-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-xl z-[120] w-11/12 max-w-2xl`}
        onClick={(e) => handlePropagation(e)}
      >
        <h4 className="text-center text-md font-semibold my-6">
          Join Our Waitlist and Get Notified When Our Site is Ready!
        </h4>
        <form onSubmit={formik.handleSubmit}>
          <div className=" w-full text-left py-4 my-3">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="outline-none w-full p-3 mt-3 text-md rounded-xl"
              placeholder="Enter your full name"
              {...formik.getFieldProps("name")}
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-3 mt-3 rounded-xl outline-none"
              placeholder="Enter your email"
              {...formik.getFieldProps("email")}
            />
          </div>

          <Btn
            fullWidth
            type="submit"
            disabled={formik.isSubmitting}
            className={`my-10 !p-4 ${formik.isSubmitting ? "opacity-50" : ""}`}
          >
            {!formik.isSubmitting ? "Join the Waitlist" : null}
          </Btn>
        </form>
      </div>
    </div>
  );
};

export default WaitListModal;
