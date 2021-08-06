import { mutationField, nonNull } from 'nexus'

export const OpportunityUpdateOneMutation = mutationField(
  'updateOneOpportunity',
  {
    type: nonNull('Opportunity'),
    args: {
      where: nonNull('OpportunityWhereUniqueInput'),
      data: nonNull('OpportunityUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.opportunity.update({
        where,
        data,
        ...select,
      })
    },
  },
)
