import { useState } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Button } from "../ui/button"
import { Field, FieldGroup } from "../ui/field"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { ROLES, type Rol } from "../../types/Roles"
import { AREAS, type Area } from "../../types/Areas"
import type { Usuario } from "../../types/Usuario"

// Estilos reutilizables (tema claro fijo)
const labelClass = "text-sm font-medium text-gray-900"

const controlClass =
  "h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 shadow-sm " +
  "placeholder:text-gray-500 transition-colors " +
  "focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:outline-none"

const selectContentClass =
  "rounded-lg border border-gray-200 bg-white text-gray-900 shadow-lg"

const selectItemClass =
  "cursor-pointer capitalize text-gray-900 " +
  "focus:bg-gray-100 focus:text-gray-900 data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900"

const primaryButtonClass =
  "cursor-pointer rounded-lg bg-blue-700 text-white shadow-sm hover:bg-blue-800 " +
  "disabled:cursor-not-allowed disabled:opacity-50"

const outlineButtonClass =
  "cursor-pointer rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-100"

type Props =
  | {
      modo: "crear"
      onCrear: (usuario: Usuario) => Promise<void> | void
    }
  | {
      modo: "editar"
      usuario: Usuario
      onEditar: (usuario: Usuario) => Promise<void> | void
    }

const Formulario = (props: Props) => {
  const usuarioActual = props.modo === "editar" ? props.usuario : undefined
  const esEdicion = props.modo === "editar"
  const titulo = esEdicion ? "Editar Usuario" : "Crear Usuario"

  const [open, setOpen] = useState(false)
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [rol, setRol] = useState<Rol | "">("")
  const [intereses, setIntereses] = useState<Area | "">("")

  const cargarValores = () => {
    setNombre(usuarioActual?.nombre ?? "")
    setCorreo(usuarioActual?.correo ?? "")
    setContrasena(usuarioActual?.contrasena ?? "")
    setRol(usuarioActual?.rol ?? "")
    setIntereses(usuarioActual?.intereses ?? "")
  }

  const handleOpenChange = (abierto: boolean) => {
    if (abierto) cargarValores()
    setOpen(abierto)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!rol || !intereses) return

    const usuario: Usuario = {
      ...(usuarioActual?.id !== undefined && { id: usuarioActual.id }),
      nombre,
      correo,
      contrasena,
      rol,
      intereses,
    }

    try {
      if (props.modo === "crear") {
        await props.onCrear(usuario)
      } else {
        await props.onEditar(usuario)
      }
      setOpen(false)
    } catch (error) {
      console.error("Error al guardar el usuario", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button
            className={esEdicion ? outlineButtonClass : primaryButtonClass}
          >
            {titulo}
          </Button>
        }
      />
      <DialogContent className="rounded-xl bg-white p-6 text-gray-900 shadow-xl sm:max-w-md">
        <DialogHeader className="border-b border-gray-200 pb-4">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            {titulo}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <FieldGroup className="space-y-4">
            <Field className="flex flex-col gap-1.5">
              <label htmlFor="nombre" className={labelClass}>
                Nombre
              </label>
              <Input
                id="nombre"
                className={controlClass}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Field>

            <Field className="flex flex-col gap-1.5">
              <label htmlFor="correo" className={labelClass}>
                Correo
              </label>
              <Input
                id="correo"
                type="email"
                className={controlClass}
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </Field>

            <Field className="flex flex-col gap-1.5">
              <label htmlFor="contrasena" className={labelClass}>
                Contraseña
              </label>
              <Input
                id="contrasena"
                type="password"
                className={controlClass}
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field className="flex flex-col gap-1.5">
                <label className={labelClass}>Rol</label>
                <Select
                  value={rol}
                  onValueChange={(v) => setRol((v ?? "") as Rol | "")}
                >
                  <SelectTrigger className={controlClass}>
                    <SelectValue placeholder="Selecciona un rol" />
                  </SelectTrigger>
                  <SelectContent className={selectContentClass}>
                    {Object.values(ROLES).map((r) => (
                      <SelectItem key={r} value={r} className={selectItemClass}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field className="flex flex-col gap-1.5">
                <label className={labelClass}>Intereses</label>
                <Select
                  value={intereses}
                  onValueChange={(v) => setIntereses((v ?? "") as Area | "")}
                >
                  <SelectTrigger className={controlClass}>
                    <SelectValue placeholder="Selecciona un interés" />
                  </SelectTrigger>
                  <SelectContent className={selectContentClass}>
                    {Object.values(AREAS).map((a) => (
                      <SelectItem key={a} value={a} className={selectItemClass}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </FieldGroup>

          <DialogFooter className="gap-2 border-t border-gray-200 pt-4 sm:justify-end">
            <DialogClose
              render={<Button className={outlineButtonClass}>Cancelar</Button>}
            />
            <Button
              type="submit"
              disabled={!rol || !intereses}
              className={primaryButtonClass}
            >
              {esEdicion ? "Actualizar" : "Guardar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Formulario