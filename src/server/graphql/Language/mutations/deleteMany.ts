import { mutationField, nonNull } from 'nexus'

export const LanguageDeleteManyMutation = mutationField('deleteManyLanguage', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'LanguageWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.language.deleteMany({ where } as any)
  },
})
