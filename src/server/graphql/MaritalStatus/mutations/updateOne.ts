import { mutationField, nonNull } from 'nexus'

export const MaritalStatusUpdateOneMutation = mutationField(
  'updateOneMaritalStatus',
  {
    type: nonNull('MaritalStatus'),
    args: {
      where: nonNull('MaritalStatusWhereUniqueInput'),
      data: nonNull('MaritalStatusUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.maritalStatus.update({
        where,
        data,
        ...select,
      })
    },
  },
)
