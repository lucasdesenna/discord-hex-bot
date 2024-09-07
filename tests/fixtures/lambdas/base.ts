import { Callback, Context } from "aws-lambda";
import { genLambdaContext } from "../../generators";

export const lambdaContext: Context = genLambdaContext();

export const lambdaCallback: Callback = () => {};
