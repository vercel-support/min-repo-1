import { mutationField, nonNull } from 'nexus'

export const OpportunityRecordTypeUpdateOneMutation = mutationField(
  'updateOneOpportunityRecordType',
  {
    type: nonNull('OpportunityRecordType'),
    args: {
      where: nonNull('OpportunityRecordTypeWhereUniqueInput'),
      data: nonNull('OpportunityRecordTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.opportunityRecordType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
