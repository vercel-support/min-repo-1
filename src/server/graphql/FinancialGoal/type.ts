import { objectType } from 'nexus'

export const FinancialGoal = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'FinancialGoal',
  definition(t) {
    t.string('id')
    t.nullable.int('actualValue')
    t.nullable.field('completionDate', { type: 'DateTime' })
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.string('description')
    t.nullable.string('name')
    t.nullable.field('household', {
      type: 'Account',
      resolve(root: any) {
        return root.household
      },
    })
    t.nullable.string('householdId')
    t.nullable.int('initialValue')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('owner', {
      type: 'User',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('ownerId')
    t.nullable.field('primaryOwner', {
      type: 'Account',
      resolve(root: any) {
        return root.primaryOwner
      },
    })
    t.nullable.string('primaryOwnerId')
    t.nullable.field('status', {
      type: 'FinancialGoalStatus',
      resolve(root: any) {
        return root.status
      },
    })
    t.nullable.string('statusId')
    t.nullable.field('targetDate', { type: 'DateTime' })
    t.nullable.int('targetValue')
    t.nullable.field('financialGoalType', {
      type: 'FinancialGoalType',
      resolve(root: any) {
        return root.financialGoalType
      },
    })
    t.nullable.string('financialGoalTypeId')
  },
})
