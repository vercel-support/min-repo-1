import { objectType } from 'nexus'

export const Contract = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Contract',
  definition(t) {
    t.string('id')
    t.nullable.field('account', {
      type: 'Account',
      resolve(root: any) {
        return root.account
      },
    })
    t.nullable.string('accountId')
    t.nullable.field('activatedBy', {
      type: 'User',
      resolve(root: any) {
        return root.activatedBy
      },
    })
    t.nullable.string('activatedById')
    t.nullable.field('activatedDate', { type: 'DateTime' })
    t.nullable.string('billingAddress')
    t.nullable.field('companySigned', {
      type: 'User',
      resolve(root: any) {
        return root.companySigned
      },
    })
    t.nullable.string('companySignedById')
    t.nullable.field('companySignedDate', { type: 'DateTime' })
    t.nullable.field('endDate', { type: 'DateTime' })
    t.nullable.string('name')
    t.nullable.string('contractNumber')
    t.nullable.field('owner', {
      type: 'User',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('ownerId')
    t.nullable.field('startDate', { type: 'DateTime' })
    t.nullable.int('contractTerm')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('customerSigned', {
      type: 'User',
      resolve(root: any) {
        return root.customerSigned
      },
    })
    t.nullable.string('customerSignedById')
    t.nullable.field('customerSignedDate', { type: 'DateTime' })
    t.nullable.string('customerSignedTitle')
    t.nullable.string('description')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.string('shippingAddress')
    t.nullable.string('specialTerms')
    t.nullable.field('status', {
      type: 'ContractStatus',
      resolve(root: any) {
        return root.status
      },
    })
    t.nullable.string('statusId')
    t.list.field('OpportunityContract', {
      type: 'Opportunity',
      args: {
        where: 'OpportunityWhereInput',
        orderBy: 'OpportunityOrderByInput',
        cursor: 'OpportunityWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OpportunityScalarFieldEnum',
      },
      resolve(root: any) {
        return root.OpportunityContract
      },
    })
    t.nullable.field('_count', {
      type: 'ContractCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
