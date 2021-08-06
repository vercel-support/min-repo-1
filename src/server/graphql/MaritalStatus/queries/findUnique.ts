import { queryField, nonNull } from 'nexus'

export const MaritalStatusFindUniqueQuery = queryField(
  'findUniqueMaritalStatus',
  {
    type: 'MaritalStatus',
    args: {
      where: nonNull('MaritalStatusWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.maritalStatus.findUnique({
        where,
        ...select,
      })
    },
  },
)
