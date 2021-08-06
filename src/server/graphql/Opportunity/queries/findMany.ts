import { queryField, nonNull, list } from 'nexus'

export const OpportunityFindManyQuery = queryField('findManyOpportunity', {
  type: nonNull(list(nonNull('Opportunity'))),
  args: {
    where: 'OpportunityWhereInput',
    orderBy: list('OpportunityOrderByInput'),
    cursor: 'OpportunityWhereUniqueInput',
    distinct: 'OpportunityScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.opportunity.findMany({
      ...args,
      ...select,
    })
  },
})
