import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur!"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui-form">
        <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
        <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
        <Button color="green" type="submit">
          Ekle
        </Button>
        {/* <FormField>
            <Field name="productName" placeholder="Ürün Adı"></Field>
            <ErrorMessage
              name="productName"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField> */}
        {/* <FormField>
            <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
            <ErrorMessage
              name="unitPrice"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField> */}
      </Form>
    </Formik>
  );
}
