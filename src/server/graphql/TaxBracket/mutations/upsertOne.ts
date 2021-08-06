import { mutationField, nonNull } from 'nexus'

export const TaxBracketUpsertOneMutation = mutationField(
  'upsertOneTaxBracket',
  {
    type: nonNull('TaxBracket'),
    args: {
      where: nonNull('TaxBracketWhereUniqueInput'),
      create: nonNull('TaxBracketCreateInput'),
      update: nonNull('TaxBracketUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.taxBracket.upsert({
        ...args,
        ...select,
      })
    },
  },
)
