import { objectType } from 'nexus'

export const Opportunity = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Opportunity',
  definition(t) {
    t.string('id')
    t.nullable.field('account', {
      type: 'Account',
      resolve(root: any) {
        return root.account
      },
    })
    t.nullable.string('accountId')
    t.nullable.int('amount')
    t.nullable.boolean('budgetConfirmed')
    t.nullable.field('closeDate', { type: 'DateTime' })
    t.nullable.field('contract', {
      type: 'Contract',
      resolve(root: any) {
        return root.contract
      },
    })
    t.nullable.string('contractId')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.string('description')
    t.nullable.boolean('discoveryCompleted')
    t.nullable.int('expectedRevenue')
    t.nullable.field('referredByContact', {
      type: 'Contact',
      resolve(root: any) {
        return root.referredByContact
      },
    })
    t.nullable.string('referredByContactId')
    t.nullable.field('financialAccount', {
      type: 'FinancialAccount',
      resolve(root: any) {
        return root.financialAccount
      },
    })
    t.nullable.string('financialAccountId')
    t.nullable.field('household', {
      type: 'Account',
      resolve(root: any) {
        return root.household
      },
    })
    t.nullable.string('householdId')
    t.nullable.field('referredByUser', {
      type: 'User',
      resolve(root: any) {
        return root.referredByUser
      },
    })
    t.nullable.string('referredByUserId')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('leadSource', {
      type: 'LeadSource',
      resolve(root: any) {
        return root.leadSource
      },
    })
    t.nullable.string('leadSourceId')
    t.nullable.field('lossReason', {
      type: 'OpportunityLossReason',
      resolve(root: any) {
        return root.lossReason
      },
    })
    t.nullable.string('lossReasonId')
    t.nullable.string('nextStep')
    t.nullable.string('opportunityName')
    t.nullable.field('owner', {
      type: 'User',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('ownerId')
    t.nullable.field('recordType', {
      type: 'OpportunityRecordType',
      resolve(root: any) {
        return root.recordType
      },
    })
    t.nullable.string('recordTypeId')
    t.nullable.int('iqScore')
    t.nullable.field('campaign', {
      type: 'Campaign',
      resolve(root: any) {
        return root.campaign
      },
    })
    t.nullable.string('campaignId')
    t.nullable.boolean('isPrivate')
    t.nullable.int('probability')
    t.nullable.int('totalOpportunityQuantity')
    t.nullable.boolean('roiAnalysisCompleted')
    t.nullable.field('stageName', {
      type: 'OpportunityStageName',
      resolve(root: any) {
        return root.stageName
      },
    })
    t.nullable.string('stageNameId')
    t.nullable.string('syncedQuoteId')
    t.nullable.field('opportunityType', {
      type: 'OpportunityType',
      resolve(root: any) {
        return root.opportunityType
      },
    })
    t.nullable.string('opportunityTypeId')
    t.list.field('FinancialAccountOpportunity', {
      type: 'FinancialAccount',
      args: {
        where: 'FinancialAccountWhereInput',
        orderBy: 'FinancialAccountOrderByInput',
        cursor: 'FinancialAccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialAccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialAccountOpportunity
      },
    })
    t.nullable.field('_count', {
      type: 'OpportunityCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
