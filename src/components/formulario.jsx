import React, { useState } from "react";
// import { Formik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
	const[formularioEnviado, cambiarFormularioEnviado] = useState(false);
  
  return (
		<>
			<Formik
				initialValues={{
					nombre: "",
					correo: "",
				}}

        validate={(valores) => {
          let errores = {};
          
          // Validación nombre
          if(!valores.nombre) {
            errores.nombre = 'Por favor ingrese un nombre.'
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = 'El nombre sólo puede contener letras y espacios.'
          }
          
          // Validación nombre
          if(!valores.correo) {
            errores.correo = 'Por favor ingrese un correo.'
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            errores.correo = 'Ejemplo: "juanperez@mail.com". El correo sólo puede contener: "a-z 0-9 .-_"'
          }

          // Validación select pais
          // if (!valores.pais) {
          //   errores.pais = 'Por favor seleccione un país.'
          // }

          return errores;
        }}

				onSubmit={(valores, {resetForm}) => {
          resetForm();
					console.log("Formulario enviado!");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{/* renderer prop
        Vamos a renderizar éste formulario en jsx.
        De las propiedades del objeto props quiero extraer handleSubmit (propiedad que inyectamos con Formik), destructurando con ECMAScript6.
        values (otra de las propiedades que inyectamos con Formik) nos permite acceder a los valores de nuestro inputs. */}
        {/* De esta manera trabajamos hacemos uso de otros componentes de Formik para tener el código más limpio: Form, Field, ErrorMessage */}
				{({ errors }) => ( // Renderer prop: función dentro de Formik que nos permite inyectarle info
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">
								Nombre
							</label>
							<Field
								type="text"
								id="nombre"
								name="nombre"
								placeholder="Nombre"
              />
              <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)}/>
						</div>
						<div>
							<label htmlFor="correo">
								Nombre
							</label>
							<Field
								type="email"
								id="correo"
								name="correo"
								placeholder="correo@correo.com"
							/>
              <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)}/>
						</div>
            {/* Fomik Select */}
            {/* <div>
              <Field name="pais" as="select">
                <option disabled selected>Seleccione un país</option>
                <option value="Panama">Panamá</option>
                <option value="Argentina">Argentina</option>
                <option value="Mexico">México</option>
              </Field>
              <ErrorMessage name="pais" component={() => (<div className="error">{errors.pais}</div>)}/>
            </div> */}
            {/* Formik radio buttons */}
            {/* <div>
              <label htmlFor="">
                <Field type="radio" name="sexo" value="hombre" /> Hombre
              </label>
              <label htmlFor="">
                <Field type="radio" name="sexo" value="mujer" /> Mujer
              </label>
            </div> */}
            {/* Formik Textarea */}
            <div>
              <Field name="mensaje" as="textarea" placeholder="Mensaje" />
            </div>
						<button type="submit">Enviar</button>
            {formularioEnviado && <p className="exito">¡Formulario enviado con éxito!</p>}
					</Form>
				)}

        {/* De esta manera ya funciona sin los componentes Form, Field, ErrorMessage */}
				{/* {({
					values,
          errors,
          touched,
					handleSubmit,
					handleChange,
					handleBlur,
				}) => (
					<form
						className="formulario"
						onSubmit={handleSubmit}
					>
						<div>
							<label htmlFor="nombre">
								Nombre
							</label>
							<input
								type="text"
								id="nombre"
								name="nombre"
								placeholder="Nombre"
								value={values.nombre}
								onChange={handleChange}
								onBlur={handleBlur}
                />
                {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
						</div>
						<div>
							<label htmlFor="correo">
								Nombre
							</label>
							<input
								type="email"
								id="correo"
								name="correo"
								placeholder="correo@correo.com"
								value={values.correo}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
              {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
						</div>
						<button type="submit">Enviar</button>
            {formularioEnviado && <p className="exito">¡Formulario enviado con éxito!</p>}
					</form>
				)} */}
			</Formik>
		</>
	);
};

export default Formulario;