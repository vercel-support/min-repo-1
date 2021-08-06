import { queryField, nonNull } from 'nexus'

export const OpportunityFindUniqueQuery = queryField('findUniqueOpportunity', {
  type: 'Opportunity',
  args: {
    where: nonNull('OpportunityWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.opportunity.findUnique({
      where,
      ...select,
    })
  },
})
