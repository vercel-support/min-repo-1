import { mutationField, nonNull } from 'nexus'

export const SecuritiesUpdateOneMutation = mutationField(
  'updateOneSecurities',
  {
    type: nonNull('Securities'),
    args: {
      where: nonNull('SecuritiesWhereUniqueInput'),
      data: nonNull('SecuritiesUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.securities.update({
        where,
        data,
        ...select,
      })
    },
  },
)
