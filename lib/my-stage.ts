import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { MyLambdaStack } from './my-lambda-stack';

/**
 * Deployable unit of web service app
 */
export class MyStage extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new MyLambdaStack(this, 'WebService');
    
    // Expose CdkpipelinesDemoStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}
