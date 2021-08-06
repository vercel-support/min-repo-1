import { mutationField, nonNull } from 'nexus'

export const LanguageUpdateManyMutation = mutationField('updateManyLanguage', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'LanguageWhereInput',
    data: nonNull('LanguageUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.language.updateMany(args as any)
  },
})
