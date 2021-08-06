import { mutationField, nonNull } from 'nexus'

export const SecuritiesCreateOneMutation = mutationField(
  'createOneSecurities',
  {
    type: nonNull('Securities'),
    args: {
      data: nonNull('SecuritiesCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.securities.create({
        data,
        ...select,
      })
    },
  },
)
