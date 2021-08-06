import { mutationField, nonNull } from 'nexus'

export const OpportunityRecordTypeDeleteOneMutation = mutationField(
  'deleteOneOpportunityRecordType',
  {
    type: 'OpportunityRecordType',
    args: {
      where: nonNull('OpportunityRecordTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.opportunityRecordType.delete({
        where,
        ...select,
      })
    },
  },
)
