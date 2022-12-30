import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useStore } from "../store/store";
import * as yup from "yup";

type TMovieFormProps = {
  onSubmit: (data: any, event: any) => void;
};

type MovieFormValues = {
  movieName: string;
  description: string;
  category: string;
};

export const MovieForm = ({ onSubmit }: TMovieFormProps) => {
  let validation = yup.object().shape({
    movieName: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
  });

  const frmInitiliazer = useForm<MovieFormValues>({
    defaultValues: {
      movieName: "",
      description: "",
      category: "",
    },
    resolver: yupResolver(validation),
  });

  const onError = (data: any, event: any) => {
    event?.preventDefault();
  };

  return (
    <div className="flex justify-center m-auto outline rounded w-1/2">
      <form
        onSubmit={frmInitiliazer.handleSubmit(onSubmit, onError)}
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col gap-4 p-4 w-full">
          <div className="flex flex-col w-full">
            <label className="text-secondary font-mono text-lg">
              Movie Name
            </label>
            <input
              data-cy="Movie-Name"
              className="outline rounded"
              {...frmInitiliazer.register("movieName")}
            />
            {frmInitiliazer.formState.errors.movieName && (
              <span data-cy="movieError" className="text-primary">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-secondary  font-mono text-lg">
              Description
            </label>
            <textarea
              data-cy="Description"
              className="outline rounded"
              {...frmInitiliazer.register("description")}
            />
            {frmInitiliazer.formState.errors.description && (
              <span data-cy="descriptionError" className="text-primary">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-secondary  font-mono text-lg">
              Category
            </label>
            <input
              data-cy="Category"
              className="outline rounded"
              {...frmInitiliazer.register("category")}
            />
            {frmInitiliazer.formState.errors.category && (
              <span data-cy="categoryError" className="text-primary">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="text-center m-2 w-full">
          <input data-cy="submit" type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
};
