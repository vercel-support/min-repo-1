import { mutationField, nonNull } from 'nexus'

export const TaxBracketCreateOneMutation = mutationField(
  'createOneTaxBracket',
  {
    type: nonNull('TaxBracket'),
    args: {
      data: nonNull('TaxBracketCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.taxBracket.create({
        data,
        ...select,
      })
    },
  },
)
