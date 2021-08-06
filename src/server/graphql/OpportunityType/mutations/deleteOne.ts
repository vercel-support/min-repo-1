import { mutationField, nonNull } from 'nexus'

export const OpportunityTypeDeleteOneMutation = mutationField(
  'deleteOneOpportunityType',
  {
    type: 'OpportunityType',
    args: {
      where: nonNull('OpportunityTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.opportunityType.delete({
        where,
        ...select,
      })
    },
  },
)
