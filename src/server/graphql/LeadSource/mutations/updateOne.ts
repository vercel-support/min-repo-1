import { mutationField, nonNull } from 'nexus'

export const LeadSourceUpdateOneMutation = mutationField(
  'updateOneLeadSource',
  {
    type: nonNull('LeadSource'),
    args: {
      where: nonNull('LeadSourceWhereUniqueInput'),
      data: nonNull('LeadSourceUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.leadSource.update({
        where,
        data,
        ...select,
      })
    },
  },
)
