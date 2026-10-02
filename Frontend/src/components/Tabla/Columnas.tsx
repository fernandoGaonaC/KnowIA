import {createColumnHelper} from "@tanstack/react-table"
import {type DataTableFeatures } from "./data-table-features";
import type  { UsuarioResponseDTO } from "@/types/Usuario";
import { Button } from "../ui/button";


const columnHelper = createColumnHelper<DataTableFeatures, UsuarioResponseDTO>();

export const Columnas=columnHelper.columns([
    columnHelper.accessor("id",{
        header:"id"
    }),
    columnHelper.accessor("correo",{
        header:"correo"
    }),
    columnHelper.accessor("nombre",{
        header:"nombre"
    }),
    columnHelper.accessor("rol",{
        header:"rol"
    }),
    columnHelper.accessor("interes",{
        header:"interes"
    }),
])