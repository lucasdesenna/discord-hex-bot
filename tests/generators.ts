import { APIGatewayProxyEvent, Context } from "aws-lambda";
import apiGatewayEvent from "./fixtures/events/apiGateway.json";
import lambdaContext from "./fixtures/contexts/lambda.json";

type Generator<T> = (overrides?: Partial<T>) => T;

const mergeFn = (base: any) => (overrides?: any) => ({
  ...base,
  ...overrides,
});

export const genApiGatewayEvent: Generator<APIGatewayProxyEvent> =
  mergeFn(apiGatewayEvent);

export const genLambdaContext: Generator<Context> = mergeFn({
  ...lambdaContext,
  getRemainingTimeInMillis: () => 1,
});
