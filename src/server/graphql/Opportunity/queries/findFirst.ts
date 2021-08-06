import { queryField, list } from 'nexus'

export const OpportunityFindFirstQuery = queryField('findFirstOpportunity', {
  type: 'Opportunity',
  args: {
    where: 'OpportunityWhereInput',
    orderBy: list('OpportunityOrderByInput'),
    cursor: 'OpportunityWhereUniqueInput',
    distinct: 'OpportunityScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.opportunity.findFirst({
      ...args,
      ...select,
    })
  },
})
