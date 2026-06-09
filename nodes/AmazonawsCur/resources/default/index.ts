import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Delete Report Definition",
					"value": "Delete Report Definition",
					"action": "Delete Report Definition",
					"description": "Deletes the specified report.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition"
						}
					}
				},
				{
					"name": "Describe Report Definitions",
					"value": "Describe Report Definitions",
					"action": "Describe Report Definitions",
					"description": "Lists the AWS Cost and Usage reports available to this account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions"
						}
					}
				},
				{
					"name": "Modify Report Definition",
					"value": "Modify Report Definition",
					"action": "Modify Report Definition",
					"description": "Allows you to programatically update your report preferences.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition"
						}
					}
				},
				{
					"name": "Put Report Definition",
					"value": "Put Report Definition",
					"action": "Put Report Definition",
					"description": "Creates a new report using the description that you provide.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Definition"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSOrigamiServiceGatewayService.DeleteReportDefinition",
			"type": "options",
			"options": [
				{
					"name": "AWS Origami Service Gateway Service Delete Report Definition",
					"value": "AWSOrigamiServiceGatewayService.DeleteReportDefinition"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Definition"
					]
				}
			}
		},
		{
			"displayName": "Report Name",
			"name": "ReportName",
			"type": "string",
			"default": "",
			"description": "The name of the report that you want to delete. The name must be unique, is case sensitive, and can't include spaces.",
			"routing": {
				"send": {
					"property": "ReportName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Definition"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Definitions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Definitions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Definitions"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSOrigamiServiceGatewayService.DescribeReportDefinitions",
			"type": "options",
			"options": [
				{
					"name": "AWS Origami Service Gateway Service Describe Report Definitions",
					"value": "AWSOrigamiServiceGatewayService.DescribeReportDefinitions"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Definitions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results that AWS returns for the operation.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Definitions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "A generic string.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Definitions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Report Definition"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSOrigamiServiceGatewayService.ModifyReportDefinition",
			"type": "options",
			"options": [
				{
					"name": "AWS Origami Service Gateway Service Modify Report Definition",
					"value": "AWSOrigamiServiceGatewayService.ModifyReportDefinition"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Report Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Name",
			"name": "ReportName",
			"type": "string",
			"default": "",
			"description": "The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces. ",
			"routing": {
				"send": {
					"property": "ReportName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Report Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Definition",
			"name": "ReportDefinition",
			"type": "json",
			"default": "{\n  \"AdditionalSchemaElements\": [\n    null\n  ],\n  \"AdditionalArtifacts\": {},\n  \"RefreshClosedReports\": {},\n  \"ReportVersioning\": {},\n  \"BillingViewArn\": {}\n}",
			"description": "The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. ",
			"routing": {
				"send": {
					"property": "ReportDefinition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Report Definition"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Report Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Report Definition"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSOrigamiServiceGatewayService.PutReportDefinition",
			"type": "options",
			"options": [
				{
					"name": "AWS Origami Service Gateway Service Put Report Definition",
					"value": "AWSOrigamiServiceGatewayService.PutReportDefinition"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Report Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Definition",
			"name": "ReportDefinition",
			"type": "json",
			"default": "{\n  \"AdditionalSchemaElements\": [\n    null\n  ],\n  \"AdditionalArtifacts\": {},\n  \"RefreshClosedReports\": {},\n  \"ReportVersioning\": {},\n  \"BillingViewArn\": {}\n}",
			"description": "Represents the output of the PutReportDefinition operation. The content consists of the detailed metadata and data file information. ",
			"routing": {
				"send": {
					"property": "ReportDefinition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Report Definition"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Report Definition"
					]
				}
			}
		},
];
